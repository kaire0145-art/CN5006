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


os=require("os")
const util=require('util')
console.log("temporary directory"+ os.tmpdir() )
console.log("hostname: "+ os.hostname())
console.log("OS : " + os.platform() +"release:"+ os.release())
console.log("Uptime"+ (os.uptime())/3600 +" hours")
console.log("userInfo" + util.inspect(os.userInfo()))
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte")
console.log(" free: "+os.freemem()/1000000000 + "Giga byte")
console.log("CPU "+ util.inspect(os.cpus()))
console.log("Network"+ util.inspect(os.networkInterfaces()))
console.log("programe end")
