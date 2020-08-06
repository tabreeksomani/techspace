import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(public fireservices: AngularFirestore) { }
  DeleteJob(RecordID: any) {
    this.fireservices.doc('Jobs/' + RecordID).delete();

  }

  CreateJob(Record) {
      return this.fireservices.collection('Jobs').add(Record);
  }
  CreateProfile(Record) {
    return this.fireservices.collection('Profiles').add(Record);
}
  GetJobs() {
    return this.fireservices.collection('Jobs').snapshotChanges();
  }
  GetProfiles() {
    return this.fireservices.collection('Profiles').snapshotChanges();
  }
  // UpdateJob(recordid, record) {
  //   this.fireservices.doc('Jobs/' + recordid).update(record);
  // }
}
