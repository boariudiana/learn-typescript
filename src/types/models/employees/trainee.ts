import Employee from "./employee"

export default class Trainee extends Employee {

    
    constructor(name: string,  roles : string[], private superviserName: string ) {
        super(name, roles)
    }

    changeSuperviser (name: string) { 
        this.superviserName = name;
    }

    get nameOfSuperviser () {
        return this.superviserName;
    }
}