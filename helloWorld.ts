class Employee {
    static maxEmployeeID: number = 1000;
    EmployeeName: string;
    EmployeeID: number;

    constructor(name: string) {
        console.log(this);
        this.EmployeeName = name;
        this.EmployeeID = Employee.maxEmployeeID++;
    }

    GetDetails() {
        console.log(this.EmployeeName + ': ID: ' + this.EmployeeID);
    }
}

var emp1 = new Employee('Biswaranjan');
var emp2 = new Employee('Ashutosh');

emp1.GetDetails();
emp2.GetDetails();