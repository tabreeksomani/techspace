
export class Company  {
    constructor(public name: string, public level: level)
    {}
    }

    export enum level {
        Platinum = "Platinum",
        Diamond = "Diamond",
        Gold = "Gold",
        Silver = "Silver",
    }