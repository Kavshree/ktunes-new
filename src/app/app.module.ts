import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { UtilitiesModule } from './UtilitiesModule/utilities.module';
import { UserModule } from './UserModule/User.module';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainRoutes } from './Routes/MasterRoutes';
import { KTuneService } from './ktune.service';
import { AuthGuardConfirmation } from './formAuth.confirm';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    UtilitiesModule,
    UserModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [KTuneService, AuthGuardConfirmation],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
