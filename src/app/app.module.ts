import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactDashboardComponent } from './contact-dashboard/contact-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { NgxPopper } from 'angular-popper';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FilterPipeModule,
    Ng2SearchPipeModule,
    MdbPopoverModule,
    MdbDropdownModule,
    NgxPopper
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
