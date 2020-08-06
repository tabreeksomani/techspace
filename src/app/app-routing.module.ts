import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component'
import { SelectprofileComponent } from './selectprofile/selectprofile.component';
import { SelectjobComponent } from './selectjob/selectjob.component';
import { AddjobComponent } from './addjob/addjob.component';
import { AddprofileComponent } from './addprofile/addprofile.component';


const routes: Routes = [{path: '', component: WelcomeComponent},
{path: 'profiles', component: SelectprofileComponent},
{path: 'jobs', component: SelectjobComponent},
{path: 'addjob', component: AddjobComponent},
{path: 'addprofile', component: AddprofileComponent}              
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
