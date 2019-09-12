import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  isSideNavOpen = false;

  constructor() {
  }
}
