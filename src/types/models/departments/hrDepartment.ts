import Department from "./Department";
import Employee from "../employees/Employee";
import Role from "../../enums/Role";
import DepartmentNames from "../../enums/DepartmentsNames";

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