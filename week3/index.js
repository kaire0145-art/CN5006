function EmployeeInfo (name, salary)
{
    console.log(" Welcome " + name + " your monthly slary is " + salary);
}

//display the current date and time
const currentDateTime = new Date();

console.log("This is my first program ");
console.log (" Programe run on : " + currentDateTime.toLocaleString());

var Empname = "John";
var EmpSalary = 5000;

//calling the function 
EmployeeInfo (Empname, EmpSalary);

const EmpSkills= (skills,Name,LabGrp)=> {
console.log(" Student ID"+ Name+ "Expert in "+ skills)
console.log("Lab Group Name",LabGrp)
}
EmpSkills("java","Replace this with your Student ID ","Replace with your Lab Grp")
