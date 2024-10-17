// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  result = true;
  let employees = [];

  while(result == true){

    const employee = {

      sayHello: function() {
        this.firstName = prompt("Please enter first name: ");
        this.lastName = prompt("Please enter last name: ");
        this.salary = prompt("Enter salary: ");
      },
    };

    employee.sayHello();

    // employee.firstName = prompt("Please enter first name: ");
    // employee.lastName = prompt("Please enter last name: ");
    // employee.salary = prompt("Enter salary: ");

    employees.push(employee);

    let result = confirm("Do you want to add another employee?");

    if(result == false){
      break;
    }

  }

  return employees
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  
  let average = 0 ;
  let numberOfEmployees = employeesArray.length;


  for(i=0; i < employeesArray.length; i++){
    average = (employeesArray[i].salary*1) + (average * 1);
  }

  let averageSalaryWithTwoDecimals = average/numberOfEmployees

  console.log("The average employee salary between our " + numberOfEmployees + " employee(s) is $" + averageSalaryWithTwoDecimals.toFixed(2));

}

// Select a random employee
  const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    let valueRan = getRandomInt(employeesArray.length);

    let employeeFirstName = employeesArray[valueRan].firstName;
    let employeeLastName = employeesArray[valueRan].lastName;

    console.log("Congratulations to " + employeeFirstName + " " + employeeLastName + ", our random drawing winner!");
  }

 


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
