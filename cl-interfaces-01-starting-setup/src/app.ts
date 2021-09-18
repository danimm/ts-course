import {
  Department,
  ITDepartment,
  AccountingDepartment,
} from "./classes/Department";

const it = new ITDepartment("d1", ["Max"]);

it.addEmployees("Max");
it.addEmployees("Daniel");
it.readEmployee();

// const accounting = new AccountingDepartment("d3", ["first report.."]);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);

accounting.mostRecentReport = "the most..";
console.log(accounting.mostRecentReport);

const employee1 = Department.createEmployee("Max");
console.log(employee1);
