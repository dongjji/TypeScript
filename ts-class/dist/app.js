"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(this.name);
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployees() {
        console.log(this.id, this.employees);
    }
}
class abstractDepartment {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployees() {
        console.log(this.id, this.employees);
    }
}
const dongpart = new Department("Dong_Id", "Dong");
dongpart.describe();
dongpart.addEmployee("Dong1");
dongpart.addEmployee("Dong2");
dongpart.name = "DDong";
class ITDepartment extends abstractDepartment {
    constructor(id, admin) {
        super(id, id + "Department");
        this.admin = admin;
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
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get latestReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found.");
    }
    set latestReport(report) {
        if (report) {
            this.addReport(report);
        }
        throw new Error("no report");
    }
    addEmployee(name) {
        if (name == "Dong") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
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
//# sourceMappingURL=app.js.map