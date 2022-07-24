import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListuserComponent } from './listuser.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { PipesModule } from 'src/app/common/pipes/pipes.module';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: ListuserComponent
  }
];

@NgModule({
  declarations: [ListuserComponent],
  imports: [
    FormsModule,
    PipesModule,
    NavbarModule,
    CommonModule, RouterModule.forChild(routes)
  ], exports: [RouterModule]
})
export class ListuserModule { }
