import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetConfirmComponent } from './shared/components/get-confirm/get-confirm.component';
import { ClientdashComponent } from './shared/components/clientdash/clientdash.component';
import { ClientformComponent } from './shared/components/clientform/clientform.component';
import { ClientSingleComponent } from './shared/components/client-single/client-single.component';
import { ClientCardComponent } from './shared/components/client-card/client-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GetConfirmComponent,
    ClientdashComponent,
    ClientformComponent,
    ClientSingleComponent,
    ClientCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
