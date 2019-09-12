import {Component, OnInit} from '@angular/core';
import {NavigationService} from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isSideNavOpen = false;

  constructor(private navService: NavigationService) {
  }

  ngOnInit(): void {

  }

}
