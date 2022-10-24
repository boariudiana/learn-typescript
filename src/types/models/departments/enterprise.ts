import Department from "./department";
import ItDepartment from "./itDepartment";
import DepartmentType from "../../enums/departmentType";
import HRDepartment from "./hrDepartment";

export default class Enterprise {
    private departments: Department[] = [];

    get allDepartments() {
        return this.departments;
    }
    
    constructor(private name: string) {

    }

    addDepartment(departmentType : DepartmentType,) {
        switch(departmentType) {
            case DepartmentType.HR:
                this.departments.push(new HRDepartment());
                return;
            case DepartmentType.IT:
                this.departments.push (new ItDepartment());
                return;
            default :
            throw new Error(`${departmentType} does not exist on type Department`)
        }
    }

}