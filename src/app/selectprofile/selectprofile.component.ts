import { Component, OnInit } from '@angular/core';
import { CandidateProfile } from '../profile/candidateprofile'
import { ProfileService } from '../profile/profile.service'
import { SharedService } from '../service/shared.service';
import { Listing } from '../listing';

@Component({
  selector: 'app-selectprofile',
  templateUrl: './selectprofile.component.html',
  styleUrls: ['./selectprofile.component.css']
})
export class SelectprofileComponent implements OnInit {

    
    listings: CandidateProfile[];
    
    profiles: CandidateProfile[];
    selectedCommit: string;
    selectedRole: string;
    roles: string[];
    commits: string[];
    commitments: string[];
    profilelist: any;
    message: string;
    constructor(public sharedservice: SharedService) { }

      
      
      ngOnInit(): void {
        this.sharedservice.GetProfiles().subscribe(data => {

          this.profilelist = data.map(e => {
            return {
              id: e.payload.doc.id,
              isedit: false, 
              role: e.payload.doc.data()['role'],
              aboutme: e.payload.doc.data()['aboutme'],
              experience: e.payload.doc.data()['experience'],
              projects: e.payload.doc.data()['projects'],
              skills: e.payload.doc.data()['skills'],
              email: e.payload.doc.data()['email'],

              commitment: e.payload.doc.data()['commitment'],
            };
          })
          console.log(this.profilelist);
          
        for (let index = 0; index < this.profilelist.length; index++) {
          const Record = this.profilelist[index];
          var listing = new CandidateProfile(Record['id'], Record['role'], Record['experience'], Record['projects'], Record['skills'], Record['email'], Record['commitment']);
        
          if (this.profiles == null)
          this.profiles = [listing];
          else this.profiles.push(listing);
        
        }
        for (let x of this.profiles) {
          if (this.commitments == null){
            this.commitments = [x.commitment];
          } else if (!this.commitments.includes(x.commitment)){
            this.commitments.push(x.commitment);
          }
          
        }
       
        for (let x of this.profiles) {
          if (this.roles == null){
            this.roles = [x.role];
          } else if (!this.roles.includes(x.role)){
            this.roles.push(x.role);
          }
          
        }
        this.listings = this.profiles;

        

      })

          
        }

        send(Record: CandidateProfile) {
          alert(Record.email);
        }

          search() {
            if (this.selectedCommit == "All") this.selectedCommit = null;
            if (this.selectedRole == "All") this.selectedRole = null;
            this.listings = null;
            if (this.selectedCommit == null && this.selectedRole == null) {
                  this.listings = this.profiles;
            }
  
            else if (this.selectedRole != null && this.selectedCommit != null) {
              for (let x of this.profiles) {
                if (this.selectedRole == x.role && this.selectedCommit == x.commitment) {
                  
                  if (this.listings == null) this.listings = [x];
                  else this.listings.push(x);
                }             
              }
            } 
            else if (this.selectedRole != null) {
              for (let x of this.profiles) {
                if (this.selectedRole == x.role) {
                  
                  if (this.listings == null) this.listings = [x];
                  else this.listings.push(x);
                }             
              }
            }
            else if (this.selectedCommit != null) {
              for (let x of this.profiles) {
                if (this.selectedCommit == x.commitment) {
                  
                  if (this.listings == null) this.listings = [x];
                  else this.listings.push(x);
                }             
              }
            }
            
          
          
        }
        
        
      }

