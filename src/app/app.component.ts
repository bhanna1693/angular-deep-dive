import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {fadeAnimation} from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  constructor() {
  }

  ngOnInit(): void {
  }

  handleSideNavMenuClick(sideNavStatus: boolean) {
    sideNavStatus ? this.sidenav.open() : this.sidenav.close();
  }

  closeSideNav() {
    this.sidenav.close();
  }

}
