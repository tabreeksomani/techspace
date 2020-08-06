import { Component, OnInit, Testability } from '@angular/core';
import {SharedService} from '../service/shared.service';


@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css']
})
export class AddjobComponent implements OnInit {
  jobRole: string;
  message: string;
  job: any;
  jobCommit: string;
  jobCompanyName: string;
  jobCompanyLevel: string;
  jobemail: string;


  constructor(public sharedService: SharedService) {}

  ngOnInit(): void {
    this.jobCompanyLevel = "Silver";
  }
  getJobList() {
    return this.job;
  }
  CreateRecord() {
    let Record = {};
    Record['role'] = this.jobRole;
    Record['company'] = this.jobCompanyName;  
    Record['level'] = this.jobCompanyLevel; 
    Record['commitment'] = this.jobCommit; 
    Record['email'] = this.jobemail;

    this.sharedService.CreateJob(Record).then(res => {
      this.jobRole = "";
      this.jobCompanyName = "";
      this.jobCompanyLevel = "";
      this.jobCommit = "";
      this.jobemail = "";
      console.log(res);
      this.message = "Job Data save done"; 
    })
  }
}



