import React, {useRef} from 'react';
import CheckboxesGroup from './components/CheckboxesGroup';
import Role from './types/enums/role';
import Employee from './types/models/employees/employee';
import Button from '@mui/material/Button';
import Enterprise from './types/models/departments/enterprise';
import DepartmentType from './types/enums/departmentType';
import DepartmentNames from './types/enums/departmentsNames';
import Trainee from './types/models/employees/trainee';
import ContractEmployee from './types/models/employees/contractEmployee';
import AssosiateEmployee from './types/models/employees/associateEmployee';

const employee1 = new ContractEmployee("Diana", [Role.DEVELOPER], 6000)
export const tremend = new Enterprise("Tremend");
tremend.addDepartment(DepartmentType.HR);
tremend.addDepartment(DepartmentType.IT);

const [it] = tremend.allDepartments.filter(dep => dep.departmentName === DepartmentNames.FRONTEND_BRAVO)
console.log(it)


it.addEmployee(employee1);
it.printEmployees();

employee1.printRoles();
employee1.setRole(Role.DEVELOPER);
employee1.setRole(Role.COACH);
employee1.printRoles();
employee1.getStartDate();
employee1.setWorkedIntervalShift(200)
employee1.printLastMonthSalary()

const trainee = new Trainee("Ana", [Role.DEVELOPER], "Max")
it.addEmployee(trainee);

trainee.changeName("Ira") ;
console.log(trainee.employeeName)
it.printEmployees();
trainee.changeName("Dora") ;
console.log(trainee.employeeName)
it.printEmployees();

const employee2 = new AssosiateEmployee("Radu", [Role.DEVELOPER], 8000, '2022-01-11', '2022-02-11');
employee2.printLastMonthSalary()

const EmployeeForm: React.FC = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [checkboxValues, setCheckboxeValues] = React.useState({
    hr: false,
    coach: false,
    developer: false
  });

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    setCheckboxeValues({
      ...checkboxValues,
      [event.target.name]: event.target.checked,
    });
  };


  const addEmployeeSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredName = nameInputRef.current!.value;
    // validate name
    

    let addedRoles: Role[] = [];

    Object.entries(checkboxValues).map(item =>  {
      if(item[1] === true) {
        addedRoles.push(item[0] as Role);
      };
      return 0;
    })

  
    console.log(new Employee(enteredName, addedRoles));

  };

  return (
    <form onSubmit={addEmployeeSubmitHandler}>
      <div>
        <label htmlFor="name-input">Name</label>
        <input type="text" id="name-input" ref={nameInputRef} />

      </div>
      
      <CheckboxesGroup 
        onChangeRole = {handleRoleChange}
        roles= {checkboxValues}/>
      <Button type="submit" variant="contained">Add Employee</Button>
    </form>
  );
};

const  App: React.FC = () => {


  return (
    <div className="App">
      <EmployeeForm/>
    </div>
  );
}

export default App;
