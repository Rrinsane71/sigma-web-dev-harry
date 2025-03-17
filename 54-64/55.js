let  a=5;

console.log(a)


{
    let a=66
    console.log(a)

}

// primitive Data types

let x= "harry"
let y=56
let z = null
const w = true;
let v= undefined;

console.log(typeof x,typeof y,typeof z,typeof w,typeof v)

// objects 

let p ={
    name: "Aman",
    Age: "22",
    "job-role" : "Administartor"
}
console.log(p)

p.salary = "50000";
console.log(p)

p.salary = "60000crores"
console.log(p)



let stud1= {
    name : "Shivam",
    "Phone_no" : "9371777",
    marks:80,
    Subject :"Maths"

}
console.log(stud1);

stud1.Grade="A";
console.log(stud1);




const stud2 = {
    name: "Aman"
};

console.log(stud2);  // { name: "Aman" }

// Modifying an existing property
stud2.name = "Shivam";  // Updating the value of 'name'
console.log(stud2);  // { name: "Shivam" }

// Adding a new property
stud2.age = 22;
console.log(stud2);  // { name: "Shivam", age: 22 }

// Deleting a property
delete stud2.age;
console.log(stud2);  // { name: "Shivam" }




