import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {MasterComponent} from './master/master.component';
import {MasterService} from './master/master.service';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
