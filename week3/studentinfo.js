const dateofBirth = "12/12/1980"

const getStudentName = () =>
{
    return " Mouhamed "
}
const getCampusName = ()  =>
{
    return (" UEL campus ")
}

// exporting functions & variables outside the module
exports.getName=getStudentName
exports.location=getCampusName
exports.dob=dateofBirth

//how to rxport function with parameters
exports.Studentgrade = (marks) => {
    if (marks > 50 && marks < 70) {
        return "B grade";
    } else {
        return "A grade";
    }
};

console.log("Student Name:", exports.getName());
console.log("Campus:", exports.location());
console.log("Date of Birth:", exports.dob);

console.log("Grade for 65 marks:", exports.Studentgrade(65));
console.log("Grade for 80 marks:", exports.Studentgrade(80));
