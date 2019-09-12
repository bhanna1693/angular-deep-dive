import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutInvestingComponent} from './about-investing/about-investing.component';
import {HomeComponent} from './home/home.component';


const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutInvestingComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
