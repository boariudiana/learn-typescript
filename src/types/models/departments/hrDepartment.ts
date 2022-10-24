import Department from "../departments/department";
import Employee from "../employees/employee";
import Role from "../../enums/role";
import DepartmentNames from "../../enums/departmentsNames";

export default class HRDepartment extends Department {
    static INDEX: number = 0;
    private reports : string[] = [];
    private lastReport: string = ""

    get recentReport () {
      return this.lastReport;
    }

    protected readonly id : string;

    constructor() {
        super(DepartmentNames.WE_ARE_HR);
        this.id =  `hr${(++HRDepartment.INDEX).toString()}`
    }


    addEmployee(employee: Employee): void {
      //validate this is a hr
      if (employee.getRoles().includes(Role.HR)) {
        this.employees.push(employee);
      }
    }

    addReport (text: string) {
      this.reports.push(text)
      this.lastReport = text;
    }
    


  }