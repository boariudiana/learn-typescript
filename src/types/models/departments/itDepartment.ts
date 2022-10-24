import Department from "../departments/department";
import Employee from "../employees/employee";
import Role from "../../enums/role";
import DepartmentNames from "../../enums/departmentsNames";

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