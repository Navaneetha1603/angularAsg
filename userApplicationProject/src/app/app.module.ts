import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomerouteComponent } from './homeroute/homeroute.component';
import { AddrouteComponent } from './addroute/addroute.component';
import { UpdaterouteComponent } from './updateroute/updateroute.component';
import { MaterialModule } from './material/material.module';
import {UserService} from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { DeleterouteComponent } from './deleteroute/deleteroute.component';
@NgModule({
  declarations: [
    AppComponent,
    HomerouteComponent,
    AddrouteComponent,
    UpdaterouteComponent,
    DeleterouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    FormsModule,
    BrowserModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
