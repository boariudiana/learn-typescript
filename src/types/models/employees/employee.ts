
import Role from "../../enums/role";


class Employee {
    static INDEX = 0;
    protected readonly id: string;
    protected createdDate: Date = new Date();
    emailAdress: string = ""

    constructor( protected name: string, protected roles: string[]) {
        this.id =  `employee${(++Employee.INDEX).toString()}`
    }

    addRole (role : Role) {
        if(this.roles.filter(el => el === role).length > 0){
            console.log(`${this.name} already has ${role} role` )
        } else {
            this.roles.push(role);
            console.log(`Succsessfully added  ${role} role to ${this.name}`)
        }
    }

    printRoles() {
        console.log(`${this.name} has folowing roles : ${this.roles}`)
    }

    getRoles() {
        return this.roles;
    }

    setRole(role: Role) {
        this.addRole(role);
    }

    getStartDate() {
        console.log (this.createdDate.toDateString())
    }

    get employeeName () {
        return this.name
    }

    changeName (name: string) {
        this.name = name
        
    }


}


export default Employee;