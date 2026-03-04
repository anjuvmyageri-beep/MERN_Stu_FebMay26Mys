//Basics of Objects
const person={
    name:"Anjali",
    age:23,
    isStudent:false
};
//console.log("person",person);
//console.log("Name:",person.name);
//console.log("Age:", person["age"]);

//Add a new property
person.city="Mysore";
console.log("person",person);

//Modify
person.age=31;
//delete
delete person.isStudent;
console.log("person",person);

//object constructor
const car=new Object();
car.make="Audi";
car.model="A4";
car.year=2026;
console.log("car",car);