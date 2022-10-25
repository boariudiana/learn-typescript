import Employee from "../employees/Employee";

export default abstract class Department {
    
    private name: string;
    protected abstract id: string;
    protected employees: Employee[] = [];

    get departmentName() {
        return this.name;
    }

    get departmentEmpoyee() {
        return this.employees;
    }

    constructor(name: string) {
        this.name = name;
    }

    abstract addEmployee(employee: Employee):void;


    printEmployees() {

      const names = this.employees.map( employee => employee.employeeName)
      console.log(`members of the ${this.name} department are: ${names}` )
    }


}