import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { SelectjobComponent } from './selectjob/selectjob.component';
import { SelectprofileComponent } from './selectprofile/selectprofile.component';
import { MenuComponent } from './menu/menu.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ReactiveFormsModule } from '@angular/forms';


import { FormsModule } from '@angular/forms';
import { JobService } from './job.service';
import { ProfileService } from './profile/profile.service';
import { AddprofileComponent } from './addprofile/addprofile.component';
import { AddjobComponent } from './addjob/addjob.component';
import { environment } from 'src/environments/environment';
import { SharedService } from './service/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SelectjobComponent,
    SelectprofileComponent,
    MenuComponent,
    WelcomeComponent,
    AddprofileComponent,
    AddjobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [JobService, ProfileService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
