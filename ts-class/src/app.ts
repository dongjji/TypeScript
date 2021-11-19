class Department {
  //   private id: string;
  //   public name: string;
  //   private employees: string[] = [];
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  describe(this: Department) {
    console.log(this.name);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployees() {
    console.log(this.id, this.employees);
  }
}

abstract class abstractDepartment {
  //   private id: string;
  //   public name: string;
  //   private employees: string[] = [];
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  //   describe(this: Department) {
  //     console.log(this.name);
  //   }
  abstract describe(this: Department): void;

  static createEmployee(name: string) {
    return { name: name };
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployees() {
    console.log(this.id, this.employees);
  }
}

const dongpart = new Department("Dong_Id", "Dong");
dongpart.describe(); // "Dong"

// 잘못됨
// const dongpartCopy = { describe: dongpart.describe }; // <-- 여기서 dongpart.describe에 접근했기 때문에 에러
// dongpartCopy.describe(); // error: Department 클래스로 선언되어야만 접근이 가능함.

// const dongpartCopy = {
//   name: "DonG",
//   employees: ["Dong"],
//   describe: dongpart.describe,
// };
// dongpartCopy.describe(); // Department의 속성을 모두 갖고있는채로 선언되어야 함 (위에서)

dongpart.addEmployee("Dong1");
dongpart.addEmployee("Dong2");

// dongpart.employees[2] = "Dong3"; // error with accessing private property
dongpart.name = "DDong"; // no error because of public property

// inheritance
class ITDepartment extends abstractDepartment {
  constructor(id: string, public admin: string[]) {
    super(id, id + "Department");
  }
  describe() {
    console.log(this.admin);
  }
}

const ITdong = new ITDepartment("ITDong", ["Dong"]);

ITdong.addEmployee("Dong1");
ITdong.addEmployee("Dong2");

console.log(ITdong);

class AccountingDepartment extends abstractDepartment {
  private lastReport: string;

  get latestReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set latestReport(report: string) {
    if (report) {
      this.addReport(report);
    }
    throw new Error("no report");
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name == "Dong") {
      return;
    }
    this.employees.push(name); // protected(inherit O) vs private(inherit X)
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  describe() {
    console.log(this.name);
  }
}
