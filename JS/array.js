const students = [
    { id: 1, name: "Priya" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Anu" }
];

for (let i of students) {
    console.log(i.id, i.name);
}
students.forEach((i) => {
    console.log(i.name);
});