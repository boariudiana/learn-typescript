
import Role from "../enums";


class Employee {
    name : string;
    private roles : string[];
    
    private startDate: Date;
    

    constructor( name: string, roles: string[]) {
        this.name = name;
        this.roles = roles;
        this.startDate = new Date();
        
    }

    addRole (role : Role) {
        if(this.roles.filter(el => el === role).length > 0){
            console.log(`${this.name} already has ${role} role` )
        } else {
            this.roles.push(role);
            console.log(`Succsessfully added  ${role} role to ${this.name}`)
        }
    }

    getroles() {
        console.log(`${this.name} has folowing roles : ${this.roles}`)
    }

    setRole(role: Role) {
        this.addRole(role);
    }

    getStartDate() {
        console.log (this.startDate.toDateString())
    }

}


export default Employee;