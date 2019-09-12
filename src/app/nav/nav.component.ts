import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../services/navigation.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private navService: NavigationService) { }

  ngOnInit() {
  }

}
