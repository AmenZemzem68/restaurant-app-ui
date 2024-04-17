import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  constructor(private router: Router) {}

  goToProfile() {
    this.router.navigateByUrl('/profile');
  }

  goToSettings() {
    this.router.navigateByUrl('/settings');
  }
  goToFrame() {
    this.router.navigateByUrl('/settings');
  }

  ngOnInit() {}

}
