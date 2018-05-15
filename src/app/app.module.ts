import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {DetailComponent} from './detail/detail.component';
import {MasterComponent} from './master/master.component';
import {ListComponent} from './list/list.component';
import {MasterService} from './master/master.service';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    MasterComponent,
    ListComponent
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
