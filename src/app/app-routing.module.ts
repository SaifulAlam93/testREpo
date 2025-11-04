import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserHomeComponent } from './modules/user/components/user-home/user-home.component';
import { UserComponent } from './modules/user/user.component';
import { UserDashboardComponent } from './modules/user/components/user-dashboard/user-dashboard.component';
import { AdminComponent } from './modules/admin/admin.component';
import { AdminHomeComponent } from './modules/admin/components/admin-home/admin-home.component';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact/:id', component: ContactComponent },

  {
    path: 'user', component: UserComponent,
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'admin', component: AdminComponent,
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },

  {
    path: 'products',
    component: ProductComponent,
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      { path: 'details/:id', component: ProductDetailComponent },
      { path: 'add', component: ProductAddComponent },
      { path: 'edit/:id', component: ProductAddComponent },
      { path: 'list', component: ProductListComponent }
    ]
  },

  // User Routes
  // { path: 'user', component: UserComponent },
  // { path: 'userHome', component: UserHomeComponent },
  // { path: 'userDashboard', component: UserDashboardComponent },

  // Admin Routes
  // { path: 'admin', component: AdminComponent },
  // { path: 'adminHome', component: AdminHomeComponent },
  // { path: 'adminDashboard', component: AdminDashboardComponent },

  // { path: '**', redirectTo: 'home' }

  // User Routes
  // {
  //   path: 'user', component: UserComponent,
  //   children: [
  //     { path: '', redirectTo: 'home', pathMatch: 'full' },
  //     { path: 'home', component: UserHomeComponent },
  //     { path: 'dashboard', component: UserDashboardComponent }
  //   ]
  // },
  // {path: 'user', component: UserHomeComponent},
  // {path: 'user/home', component: UserHomeComponent},
  // {path: 'user/dashboard', component: UserDashboardComponent},

  // Admin Routes
  // { 
  //   path: 'admin', 
  //   component: AdminComponent,
  // children: [
  //   { path: '', redirectTo: 'home', pathMatch: 'full' },
  //   { path: 'home', component: AdminHomeComponent },
  //   { path: 'dashboard', component: AdminDashboardComponent }
  // ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
