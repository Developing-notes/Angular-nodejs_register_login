import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../common/pipes/pipes.module';
import { NavbarModule } from '../navbar/navbar.module';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  // },
  ,
   children: [
  { path: 'register', component: RegisterComponent },
  ]
  },
  { path: 'login', component: LoginComponent },

]


@NgModule({
  declarations: [HomeComponent, RegisterComponent,
    LoginComponent,],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    PipesModule,
    NavbarModule
  ],
  exports: [HomeComponent],
  entryComponents: [HomeComponent]

})
export class AuthModule { }
