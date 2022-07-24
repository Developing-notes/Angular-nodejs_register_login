import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateProfileComponent } from './update-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: '',
    component: UpdateProfileComponent
  }

];
@NgModule({
  declarations: [UpdateProfileComponent],
  imports: [
    CommonModule,NavbarModule,ReactiveFormsModule,HttpClientModule,
    FormsModule, RouterModule.forChild(routes)
  ], exports: [RouterModule]

})
export class UpdateProfileModule { }
