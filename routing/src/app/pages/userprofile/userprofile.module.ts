import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserprofileComponent } from './userprofile.component';
import { RouterModule, Routes } from '@angular/router';
import { PipesModule } from 'src/app/common/pipes/pipes.module';


const routes: Routes = [
  {
    path: '',
    component: UserprofileComponent
  }
];

@NgModule({
  declarations: [UserprofileComponent],
  imports: [
    CommonModule ,PipesModule,RouterModule.forChild(routes)
  ],exports:[RouterModule]

})
export class UserprofileModule { }
