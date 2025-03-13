// let a=1;

// for(let i=0; i<100; i++)
// {
//     console.log(a+i)
// }



let  obj ={
    name: "AMan",
    Role: "dev",
    job: "Engineer"

}

for (const key in obj) {
        console.log(key)
}

for (const c of "Harry") {

    console.log(c)
}


let i=5;
while(i<6){
    console.log(i);
    i++;
}

i=70;
do {
    console.log(i)
    i++;
} while (i<5);




const object={
    name: "MAna",
    age: 70,
    Location: "Mumbai"
}

for (const key in object) {
        console.log(object[key])
    
}