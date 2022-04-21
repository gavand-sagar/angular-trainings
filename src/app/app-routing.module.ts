import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'users', loadChildren: () => import('./users/user.module').then(m => m.UserModule) },
  { path: 'products', component: ProductsComponent },

  { path: 'popular-path', redirectTo: 'products' }
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
