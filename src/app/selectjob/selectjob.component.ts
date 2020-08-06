import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing';
import { JobService } from '../job.service';
import { SharedService} from '../service/shared.service'
import { Role } from '../profile/candidateprofile';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-selectjob',
  templateUrl: './selectjob.component.html',
  styleUrls: ['./selectjob.component.css']
})
export class SelectjobComponent implements OnInit {

  listings: Listing[];
  
  jobs: Listing[];
  selectedJob: string;
  opportunities:string[];
  commitments: string[];
  selectedCommit: string;
  joblist: any;
  message: string;
  constructor(public sharedservice: SharedService) { 
    }
    
    
    ngOnInit(): void {
      this.sharedservice.GetJobs().subscribe(data => {

        this.joblist = data.map(e => {
          return {
            id: e.payload.doc.id,
            isedit: false, 
            role: e.payload.doc.data()['role'],
            company: e.payload.doc.data()['company'],
            level: e.payload.doc.data()['level'],
            commitment: e.payload.doc.data()['commitment'],
            email: e.payload.doc.data()['email'],
          };
        })
     
        console.log(this.joblist);
        for (let index = 0; index < this.joblist.length; index++) {
          const Record = this.joblist[index];
          var listing = new Listing(Record['id'], Record['role'], Record['company'], Record['level'], Record['commitment'], Record['email']);
        
          if (this.jobs == null)
          this.jobs = [listing];
          else this.jobs.push(listing);
        
        }
              for (let x of this.jobs) {
                if (this.opportunities == null){
                  this.opportunities = [x.role];
                } else if (!this.opportunities.includes(x.role)){
                  this.opportunities.push(x.role);}
                  
                }
            
                
               
                  for (let x of this.jobs) {
                    if (this.commitments == null){
                      this.commitments = [x.commitment];
                    } else if (!this.commitments.includes(x.commitment)){
                      this.commitments.push(x.commitment);}
                      
                    }
                    this.message = "Completed" + this.jobs[0].commitment;

                  this.listings = this.jobs;
        
                  

      });

//       this.joblist.forEach(element => {
        
//         this.list1 = new Listing(element['id'], element['role'], element['company'], element['level'], element['commitment']);
// this.jobs.push(this.list1);
//       });
//       console.log(this.jobs);
   

        }
        send(Record) {
alert(Record.email);                    
        }

        
       
        search() {
          if (this.selectedCommit == "All") this.selectedCommit = null;
            if (this.selectedJob == "All") this.selectedJob = null;
            this.listings = null;
            if (this.selectedCommit == null && this.selectedJob == null) {
                  this.listings = this.jobs;
            }
  
            else if (this.selectedJob != null && this.selectedCommit != null) {
              for (let x of this.jobs) {
                if (this.selectedJob == x.role && this.selectedCommit == x.commitment) {
                  
                  if (this.listings == null) this.listings = [x];
                  else this.listings.push(x);
                }             
              }
            } 
            else if (this.selectedJob != null) {
              for (let x of this.jobs) {
                if (this.selectedJob == x.role) {
                  
                  if (this.listings == null) this.listings = [x];
                  else this.listings.push(x);
                }             
              }
            }
            else if (this.selectedCommit != null) {
              for (let x of this.jobs) {
                if (this.selectedCommit == x.commitment) {
                  
                  if (this.listings == null) this.listings = [x];
                  else this.listings.push(x);
                }             
              }
            }
            
          
        
        }
        
        
        
        
      
      // EditRecord(Record) {

      //   Record.isedit = true;
      //   Record.editrole = Record.role;
      //   Record.editcompany = Record.company;
      //   Record.editlevel = Record.level;
      //   Record.editcommitment = Record.commitment;
    
    
      // }
      DeleteRecord(RecordID) {
        this.sharedservice.DeleteJob(RecordID);
        
      }
      // UpdateRecord(recorddata) {
      //   let record = {};
      //   record['role'] = recorddata.editrole;
      //   record['company'] = recorddata.editcompany;
      //   record['level'] = recorddata.editlevel;
      //   record['commitment'] = recorddata.editcommitment;

      //   this.sharedservice.UpdateJob(recorddata.id, record);
      //   recorddata.isedit = false;
    
      // }  
      
    }


