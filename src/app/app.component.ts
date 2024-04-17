import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private menuController: MenuController , private router: Router) {}

  ngOnInit() {
    this.menuController.enable(true, 'main-menu');
  }

  goToProfile() {
    this.router.navigateByUrl('/profil');
  }
}
