import 'hammerjs';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// ngx bootstrap
import { AlertModule } from 'ngx-bootstrap';
// my modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { QuestionComponent } from './question/question.component';
// angular fire
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
// angular material*
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatCardModule,
  MatRadioModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { QuestionComponent } from './question/question.component';


const firebaseConfig = {
  apiKey: 'AIzaSyCnrl1wcFJrIpWCa-NoAF33vZ8aYfT9Rho',
  authDomain: 'ayurveda-f4e3d.firebaseapp.com',
  databaseURL: 'https://ayurveda-f4e3d.firebaseio.com',
  projectId: 'ayurveda-f4e3d',
  storageBucket: 'ayurveda-f4e3d.appspot.com',
  messagingSenderId: '10688453847'
};

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatRadioModule,
    BrowserAnimationsModule,
    FlexLayoutModule
    // QuestionComponent
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
