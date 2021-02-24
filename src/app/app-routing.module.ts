import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { AuthGuard } from './auth.guard';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { HomeComponent } from './home/home.component';
import { ListRestaurantComponent } from './list-restaurant/list-restaurant.component';
import { LoginRestaurantComponent } from './login-restaurant/login-restaurant.component';
import { RegisterRestaurantComponent } from './register-restaurant/register-restaurant.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';

const routes: Routes = [

  // {path : 'create', component : CreateEmployeeComponent},
  // {path : 'list', component : ListEmployeeComponent},
  // {path : '', redirectTo : '/list' , pathMatch : 'full'},
  // {path : '**', redirectTo : '/list' , pathMatch : 'full'},

  {path : "add" , canActivate : [AuthGuard], component : AddRestaurantComponent},
  {path : "update/:id" , component : UpdateRestaurantComponent},
  {path : "list-resto" , canActivate : [AuthGuard], component : ListRestaurantComponent},
  {path : "login" , component : LoginRestaurantComponent},
  {path : "register" , canActivate : [AuthGuard], component : RegisterRestaurantComponent},
  {path : "home" , canActivate : [AuthGuard], component : HomeComponent},
  {path : "" , component : LoginRestaurantComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
