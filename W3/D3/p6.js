//Nested object
const student={
firstname:"Anjali",
lastname:"Myageri",
score:{
    math:80,
    science:83
},
hobbies:["reading","singing"],
fullname:function(){
    return this.firstName + " "+this.lastName;
},
greet(){
    console.log("Hi,",this.fullname());
}
};
console.log(student.fullname);
console.log(student.score.math);
console.log(student.score.science);
