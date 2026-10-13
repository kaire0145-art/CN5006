const dateofBirth = "12/12/1980"

const getStudentname = () =>
{
    return " Write your name here "
}
const getCampusName = ()  =>
{
    return (" UEL campus ")
}

// exporting functions & variables outside the module
exports.getName=getStudentname
exports.location=getCampusName
exports.dob=dateofBirth

//how to rxport function with parameters
exports.Studentgrade=(marks)=>
{
    if (marks > 50 && marks < 70 ) return (" B grade ")
        else
    return ("A grade) ")
}
