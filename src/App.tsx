import React from 'react';
import Role from './types/enums';
import {ItDepartment} from "./types/models/departments";
import Employee from './types/models/employee';


const it = new ItDepartment('Front-End Bravo')
const employee1 = new Employee("Max", [Role.DEVELOPER])

it.addEmployee(employee1);
it.printEmployees();

employee1.getroles();
employee1.setRole(Role.DEVELOPER);
employee1.setRole(Role.COACH);
employee1.getroles();
employee1.getStartDate()

const  App: React.FC = () => {
  return (
    <div className="App">
      Hello World!
    </div>
  );
}

export default App;
