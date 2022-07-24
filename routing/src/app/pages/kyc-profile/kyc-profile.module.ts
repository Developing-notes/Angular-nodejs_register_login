import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KycProfileComponent } from './kyc-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NavbarModule } from 'src/app/navbar/navbar.module';
const routes: Routes = [
  {
    path: '',
    component: KycProfileComponent
  }

];


@NgModule({
  declarations: [KycProfileComponent],
  imports: [
    CommonModule, NavbarModule, ReactiveFormsModule, HttpClientModule,
    FormsModule, RouterModule.forChild(routes)
  ], exports: [RouterModule]
})
export class KycProfileModule { }
