import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
import { CommandeService } from 'src/app/services/commande.service';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  id: number = 0;
  photoUrl: string = '';
  commandes: any[] = [];
  filteredcommandes: any[] = [];
  commandesearchTerm: string = '';

  @ViewChild('verticalChart', { static: true }) verticalChart!: ElementRef;

  constructor(
    private authService: AuthService,
    private adminService: AdminService,
    private menu: MenuController,
    private commandeService: CommandeService
  ) {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.getCommandes();
    this.menu.enable(true);
    this.menu.swipeGesture(true);
    this.refreshUserData();
    this.authService.getTokenRefreshes().subscribe(() => {
      this.refreshUserData();
    });
  }

  private refreshUserData() {
    this.id = this.authService.getIdFromToken();
    this.adminService.getAdminById(this.id).subscribe((user) => {
      if (user.image) {
        this.photoUrl = `data:image/jpeg;base64,${user.image}`;
      }
      user.role = 'Admin';
      this.authService.setData(user);
    });
  }

  getCommandes() {
    this.commandeService.getAll().subscribe((commandes) => {
      this.commandes = commandes;
      this.filteredcommandes = commandes;
      this.updateChartData(); // Update the chart after fetching orders
    });
  }

  filterCommandes() {
    this.filteredcommandes = this.commandes.filter(
      (client) =>
        client.nom
          .toLowerCase()
          .includes(this.commandesearchTerm.toLowerCase()) ||
        client.prenom
          .toLowerCase()
          .includes(this.commandesearchTerm.toLowerCase())
    );
  }

  initChart(chartData: number[], labels: string[]) {
    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Orders',
            data: chartData,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Daily Orders Overview',
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Days',
            },
          },
          y: {
            ticks: {
              stepSize: 1, // Ensures whole numbers on the y-axis
            },
            title: {
              display: true,
              text: 'Number of Orders',
            },
            beginAtZero: true,
          },
        },
      },
    };

    new Chart(this.verticalChart.nativeElement, config);
  }

  updateChartData() {
    // Process commandes to calculate daily orders
    const ordersPerDay: { [key: string]: number } = {};

    this.commandes.forEach((commande) => {
      const date = new Date(commande.dateCommande);
      const day = date.toISOString().split('T')[0]; // Format: YYYY-MM-DD

      if (!ordersPerDay[day]) {
        ordersPerDay[day] = 0;
      }
      ordersPerDay[day]++;
    });

    // Prepare data and labels for the chart
    const labels = Object.keys(ordersPerDay).sort(); // Sorted by date
    const chartData = Object.values(ordersPerDay);

    // Initialize the chart with dynamic data
    this.initChart(chartData, labels);
  }
}
