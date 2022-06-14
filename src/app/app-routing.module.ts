import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DesignComponent } from './design/design.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'design',
    pathMatch: 'full'
  },
  { path: 'design',component: DesignComponent},
  {path:'main',component:MainComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
