import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageshomeComponent } from './pageshome/pageshome.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from '../auth/auth.module';

const routes: Routes = [
  {
    path: '',
    component: PageshomeComponent,
    children: [
      {
        path: "user_list",
        loadChildren: () =>
          import("../pages/listuser/listuser.module").then((m) => m.ListuserModule),
      },
      {
        path: "user_profile/:id",
        loadChildren: () =>
          import("../pages/userprofile/userprofile.module").then((m) => m.UserprofileModule),
      },
      {
        path: "update_profile",
        loadChildren: () =>
          import("../pages/update-profile/update-profile.module").
            then((m) => m.UpdateProfileModule),
      },

      {
        path: "kyc_update",
        loadChildren: () =>
          import("../pages/kyc-profile/kyc-profile.module").
            then((m) => m.KycProfileModule),
      },
    ]
  },
]

@NgModule({
  declarations: [PageshomeComponent],
  imports: [
    CommonModule, AuthModule, RouterModule.forChild(routes)
  ], exports: [RouterModule]

})


export class PagesModule { }
