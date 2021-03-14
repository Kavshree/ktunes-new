import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { UtilitiesModule } from './UtilitiesModule/utilities.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainRoutes } from './Routes/MasterRoutes';
import { KTuneService } from './ktune.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    UtilitiesModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [KTuneService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
