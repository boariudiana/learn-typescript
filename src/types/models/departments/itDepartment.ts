import Department from "./Department";
import Employee from "../employees/Employee";
import Role from "../../enums/Role";
import DepartmentNames from "../../enums/DepartmentsNames";

export default class ItDepartment extends Department {

    static INDEX: number = 0;

    protected readonly id: string
    constructor() {
        super(DepartmentNames.FRONTEND_BRAVO);
        this.id =  `it${(++ItDepartment.INDEX).toString()}`
    }
  
    addEmployee(employee: Employee): void {
      //validate this is a developer
      if (employee.getRoles().includes(Role.DEVELOPER)) {
        this.employees.push(employee)
      }
      
    }

  
  }