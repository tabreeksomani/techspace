import { Component, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-addprofile',
  templateUrl: './addprofile.component.html',
  styleUrls: ['./addprofile.component.css']
})
export class AddprofileComponent implements OnInit {
candidaterole: string;
aboutme: string;
experience: string;
projects: string;
email: string;
skills: string;
candidatecommit: string;
message: string;
constructor(public sharedService: SharedService) {}

  ngOnInit(): void {
    this.message = "Before";
  }
  CreateRecord() {
    let Record = {};
    Record['role'] = this.candidaterole;
    Record['aboutme'] = this.aboutme;  
    Record['experience'] = this.experience; 
    Record['projects'] = this.projects;
    Record['skills'] = this.skills;  
    Record['email'] = this.email;  
    Record['commitment'] = this.candidatecommit; 

    this.sharedService.CreateProfile(Record).then(res => {
      this.candidaterole = "";
      this.aboutme = "";
      this.experience = "";
      this.projects = "";
      this.skills = "";
      this.email = "";
      this.candidatecommit = "";

      console.log(res);
      this.message = "Profile Data Saved";
    })
  }
  Send() {
this.message = this.candidaterole + this.candidatecommit + this.email + this.aboutme + this.experience + this.skills + this.projects;  }

}
