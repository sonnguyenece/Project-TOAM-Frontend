import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {BoardRenterComponent} from './board-renter/board-renter.component';
import {BoardHostComponent} from './board-host/board-host.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {CreatePropertyComponent} from './create-property/create-property.component';
import {PropertiesComponent} from './properties/properties.component';

import {AddressListComponent} from './address-list/address-list.component';
import {AddressComponent} from './address/address.component';

import {AccountUpdateComponent} from "./account-update/account-update.component";
import {PropertyDetailComponent} from './component/property-detail/property-detail.component';
import {RenterDetailComponent} from './component/accountRenter-list/renter-detail/renter-detail.component';
import {RenterListComponent} from './component/accountRenter-list/renter-list/renter-list.component';
import {AccountListComponent} from './account-list/account-list.component';
import {PropertyEditComponent} from './property-edit/property-edit.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'renter', component: BoardRenterComponent},
  {path: 'host', component: BoardHostComponent},
  {path: 'admin', component: BoardAdminComponent},
  {path: 'create-property', component: CreatePropertyComponent},
  {path: 'property', component: PropertiesComponent},
  {path: 'address', component: AddressListComponent},
  {path: 'account-update/:id', component: AccountUpdateComponent},
  {
    path: 'create-address', component: AddressComponent
  },
  {path: 'accounts', component: AccountListComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home/property/:id', component: PropertyDetailComponent},
  {path: 'renter/:id', component: RenterDetailComponent},
  {path: 'renter-list', component: RenterListComponent},
  {
    path: 'home/property/:id', component: PropertyDetailComponent
  }, {
    path: 'edit-property/:id', component: PropertyEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
