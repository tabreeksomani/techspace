import { Injectable } from '@angular/core';
import {Listing} from './listing';
import {Company, level} from './company';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  comp = new Company("Google", level.Platinum);
  comp1 = new Company("Yahoo", level.Gold);
  comp2 = new Company("Press", level.Silver);


// originalList: Listing[] = [new Listing(1, "Developer", "Google", "Platinum", "5-10"), 
// new Listing(2, "Engineer", "Yahoo", "Gold", "10-15"), 
// new Listing(3, "Engineer", "Press", "Silver", "15-25")];

//   constructor() { }
//   getJobs() {
    
//     return this.originalList;
   }

