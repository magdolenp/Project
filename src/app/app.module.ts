import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { ShortlistComponent } from './shortlist/shortlist.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonService } from './person.service';
import { PersonListComponent } from './person-list.component/person-list.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { AmbassadorsComponent } from './ambassadors/ambassadors.component';
import { MySelectComponent } from './my-select/my-select.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FilterBarComponent,
    ShortlistComponent,
    PersonDetailComponent,
    PersonListComponent,
    CampaignsComponent,
    AmbassadorsComponent,
    MySelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    PersonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
