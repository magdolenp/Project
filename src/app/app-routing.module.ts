import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmbassadorsComponent } from './ambassadors/ambassadors.component';
import { CampaignsComponent } from './campaigns/campaigns.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'ambassadors', component: AmbassadorsComponent },
      { path: 'campaigns', component: CampaignsComponent },
      { path: '**', redirectTo: 'ambassadors' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
