export abstract class Department {
  static fiscalYear = 2020;
  private employees: string[] = [];
  constructor(protected readonly id: string, protected name: string) {}

  // console.log(`Department (${this.id}): ${this.name}`);
  abstract describe(this: Department): void;

  static createEmployee(name: string) {
    return { name };
  }

  addEmployees(employee: string) {
    this.employees.push(employee);
  }

  readEmployee() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

export class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log(`Department (${this.id}): ${this.name}`);
  }
}

export class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    throw new Error("No report found..");
  }

  set mostRecentReport(value: string) {
    if (!value) throw new Error("Please pass in a valid value!");
    this.addReport(value);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  describe() {
    console.log(`Department (${this.id}): ${this.name}`);
  }
}
