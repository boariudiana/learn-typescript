
import FormatToString from "../../interfaces/FormatToString";
import Employee from "./Employee";

export default class ContractEmployee extends Employee implements FormatToString {

    private activeProjects: string[] = [];
    private seniority =  Number(new Date()) - Number(this.createdDate);

    // to be transformed into a class and have instances created for every month for a particular employee
    private _workedIntervalShift: number = 0;

    get workedIntervatShift () {
        return this._workedIntervalShift;
    }

    constructor(name: string, roles : string[], private salary: number) {
        super(name, roles)
        this.salary = salary;
    }

    setWorkedIntervalShift (amount: number) {
        this._workedIntervalShift = amount;
    }

    addActiveProject (project: string) {
        this.activeProjects.push(project)
    }

    calculateLastMonthSalary () : number {
        return this.salary/224 * this._workedIntervalShift;
    } 

    formatToString(): string {
        const income = this.calculateLastMonthSalary();
        return income.toLocaleString("ro-Ro", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
    }

    printLastMonthSalary (): void {
        console.log(`${this.name} has a salary of ${this.formatToString()}`)
    }
}