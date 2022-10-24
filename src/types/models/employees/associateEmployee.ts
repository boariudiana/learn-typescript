
import moment from "moment"
import FormatStringToMoment from "../../interfaces/FormatStingToMoment";
import FormatToString from "../../interfaces/FormatToString"
import Employee from "./employee"


export default class AssosiateEmployee extends Employee implements FormatToString, FormatStringToMoment {
    
    private startDate: moment.Moment;
    private endDate: moment.Moment
    
    constructor(name: string, roles : string[], private feePerService: number, startDate: string, endDate: string) {
        super(name, roles)

        this.startDate = this.formatStringToMoment(startDate);
        this.endDate = this.formatStringToMoment(endDate)
    
    }


    calculateContractPeriod (): number {
        const start = moment(this.startDate);
        const end = moment(this.endDate);
        return end.diff(start, "days")
    }

    calculateSalary () : number {
        const payedDays = this.calculateContractPeriod();
        return this.feePerService * 28 / payedDays;
    }

    formatToString(): string {
        return this.calculateSalary().toLocaleString("ro-Ro", { maximumFractionDigits: 2, minimumFractionDigits: 2 });
    
    }

    formatStringToMoment(value: string): moment.Moment {
        return moment(value, 'DD-MM-YYYY')
    }

    printLastMonthSalary () : void {
        const salary = this.formatToString()
        console.log(`${this.name} has a salary of ${salary}`)
    }
}