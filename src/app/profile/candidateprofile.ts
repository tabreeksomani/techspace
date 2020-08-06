export class CandidateProfile  {
    constructor(public id: number,
         public role: string, 
         public experience: string, 
         public projects: string, 
         public skills: string, 
         public email: string, 
         public commitment: string)
    {}
    }
    export enum Commitment{

       time1  = "5-10",
       time2 = "10-15",
       time3 = "15-25",
       time4 = "25-35"

    }
    export enum Role {  
        Scientist = "Data Scientist",
        Webdev = "Web Developer",
        Mobdev = "Mobile Developer",
        UI = "UI Designer"
    }