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

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FilterBarComponent,
    ShortlistComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    PersonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
