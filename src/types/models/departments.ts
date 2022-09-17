
    import Employee from "./employee";

    abstract class Department {
        name: string;
    
        employees: Employee[] = [];
    
        constructor(name: string,) {
        this.name = name;
  
        }
    
        abstract addEmployee(employee: Employee):void;

    
    }
  
  export class ItDepartment extends Department {
  
    addEmployee(employee: Employee): void {
      //validate this is a developer
      this.employees.push(employee)
    }

    printEmployees() {

        const names = this.employees.map( employee => employee.name)
        console.log(`members of the ${this.name} department are: ${names}` )
    }
  
  }
  
  
  export class HRDepartment extends Department {
    
    addEmployee(employee: Employee): void {
      //validate this is a hr
      this.employees.push(employee)
    }
    
  }

  export default Department;