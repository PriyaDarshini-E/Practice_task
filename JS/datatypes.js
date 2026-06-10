const name = "Priya";
let age = 26 ;
const isStuent = true;

console.log(typeof(name), ":" +name);

const arr = ["HTML", "CSS", "JavaScript"]
console.log(arr)

console.log("typeof an array  is :",typeof(arr))

const obj ={
  name: "Priya",
  age: 22,
  city: "Chennai"
}
console.log(obj);
console.log("typeof an object is :",typeof(obj))
console.log(obj.name);

//Dynamic Data Handling
const student = {
  name: "Priya",
  age: 22,
  isPlaced: false,
  skills: ["HTML", "CSS", "JS"]
};
for(let key in student){
    console.log(key , ":" +student[key]);
}

for(let i of student.skills){
    console.log(i)
}