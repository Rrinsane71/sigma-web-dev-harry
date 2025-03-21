let a ={
    name: "Aman",
   "Roll-no": 56,
   "Mobile No": 9372662623,
   age:22
}
console.log(a)
a.hobbies="Video Games"
console.log(a)

document.title="Baaadmoshi"
document.body.style.backgroundColor="Green"





var a=5;
a=a**2;
console.log(a)


var a = prompt("enter the no");
var b = prompt("enter  the no");

if(a>b){
    console.log("You cant" )
}
else{
    console.log("You can" )
} 


let c=(age>18 ? "You can drive": "NOPE")



var a ="hello"
a= a + 56;
console.log(a)


const b ={
    name : "aman",
    div : "B",
    "roll-no": 23
}

b.age="14"
console.log(b)




const dictionary = {
    "apple": "A sweet fruit that grows on trees.",
    "javascript": "A programming language used for web development.",
    "ocean": "A vast body of saltwater covering most of the Earth's surface.",
    "mountain": "A large natural elevation of the Earth's surface.",
    "computer": "An electronic device for processing data and performing calculations."
};

// Taking input from the user
let word = prompt("Enter a word to find its meaning:").toLowerCase();

// Checking if the word exists in the dictionary
if (dictionary[word]) {
    console.log(`Meaning of ${word}": ${dictionary[word]}`);
} else {
    console.log(`Sorry, the meaning of "${word}" is not available in the dictionary.`);
}



a=5
for (i=1;i<=10;i++){
    console.log(a*i)
}





function stud(name){
    console.log("My name is "+ name)
    console.log(name + "is a Good boy")
    console.log(name) 
}
stud("Aman")




function cal(a,b){
    console.log("your  sum is",a+b)
    console.log("division is",a/b)
    console.log("Multiplication is ",a*b)
    // this is wrong as it retuen last value
    return a+b,a/b,a*b

    // corerect way in a array
    return [a+b,a/b,a*b]
}
result=cal(5,2)

console.log(result)



// chapter 3 JS

const studentmarks={
    harry : 98,
    shubham:8,
    ravi: 56
}
let stud = Object.keys(studentmarks)
let marks = Object.values(studentmarks)


// console.log(stud.length)

// see stud i prints element present in index 0 as in array same does marks
for(let i=0;i<stud.length;i++){
    console.log(stud[i] +":" + marks[i]);
}


// for in loop
const studentsmarks={
    harry : 98,
    shubham:8,
    ravi: 56
}

for(const key in studentsmarks){
    console.log(key,studentsmarks[key])

}



// for loop

     let studmarks={
        name:"Aman",
        div :"A",
        "mobile-no":93989808
     }

     stud=Object.keys(studmarks)
     marks=Object.values(studmarks)

     for(i=0;i<stud.length;i++)
     {
        console.log("The student is"  ,":"+ stud[i]  + marks[i])
     }