// function nice(name){
//     console.log("Hi " + name +  " YO You good")
//     console.log("Hi " + name +  " YO You good")
// }

// nice("Rohan");

function sum(a,b){
    console.log(a+b)
    return(a+b)
}

result=sum(3,5)
console.log("The sum of given no  is:",result)


function sum(a, b,c=3) {
    console.log(a + b);  // Just prints, but doesn't return
}

let result = sum(3, 5);
console.log("Sum is:", result); 