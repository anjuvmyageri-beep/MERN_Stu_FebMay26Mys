//Array filter
let mark=[75,49,56,70,82,51,68];
let passed=mark.filter(mark => mark >=70);

console.log(mark);
console.log(passed);

let student=[
    {name:"Anjali",mark:75},
    {name:"soumya",mark:59},
    {name:"Spoorti",mark:56},
];
console.log(student);

let qualifiedstudent= student.filter(s =>s.name>70);
console.log("qualifiedstudent:", qualifiedName); 