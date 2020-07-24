import {RegisterComponent} from './register/register.component';
import {LayoutAdminComponent} from './component/layout-admin/layout-admin.component';

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {PropertiesComponent} from "./properties/properties.component";
import {DetailsComponent} from "./component/details/details.component";
import {AuthGuard} from "./_helpers/auth.guard";
import {IndexComponent} from "./component/index/index.component";
import {PropertiesComponent} from "./properties/properties.component";
import {PropertyDetailComponent} from "./property-detail/property-detail.component";



const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'property',
        component: PropertiesComponent,
      },
      {
        path: 'detail',
        component: PropertyDetailComponent,
      }
    ],
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      {
        path: 'admin/account',
        component: PropertyDetailComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
