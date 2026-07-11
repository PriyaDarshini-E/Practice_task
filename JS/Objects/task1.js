const student = {
    name :"Priya",
    age : 26,
    city : "bangalore"
}

let course = "mern full stack"
console.log(student); //read all obj
console.log(student.name);// read spicfic data
student.college = "CICMS"; // update new key and value
student.age=25;                 // change a new value to exiting key
console.log(student);
delete student.age   //delete 
console.log(student[key]); 
console.log(student["college"]);     
console.log(course)    

