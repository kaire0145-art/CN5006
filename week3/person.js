class Person {
constructor(name, age, email) {
this.name = name;
this.age = age;
this.email = email;
}
getPersonInfo() {
return{
Name: this.name,
Age: this.age,
Email: this.email}
}
}
module.exports = Person;

const student= require('./studentinfo')
const person = require('./person')
// because getName is the function so we use ()
console.log("Student Name:" +student.getName())
console.log(student.Location())
console.log(student.dob)
// because dob is a variable so we do nt use ()
console.log(student.Studentgrade())
console.log("grade is "+student.Studentgrade(55) )
person1= new person("Jim","USA","myemail@gmail.com")
console.log("using Person Module",person1.getPersonInfo())
console.log("Programe ended")
