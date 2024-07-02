// import { add, sub, div, mul } from './math.js'
// import result from './marks.js'
// const addition = add(10, 30)
// sub(10, 30)
// div(10, 30)
// mul(10, 30)

import students from "./students.js";

// let marks = [100, 100, 98, 100];
// console.log(result(marks));

// let marks1 = [100, 98, 56, 89]
// console.log(result(marks1));


// document.querySelector("#add").innerHTML = addition


for(let i=0; i<students().length; i++)
{
    
    if(students()[i].marksForSubject.js > 90){
        console.log(`${students()[i].name} got ${students()[i].marksForSubject.js}`);
    }

    // for(let j = 0 ; j<students()[i].marksForSubject.length;j++)
    // {
    //     console.log(marksForSubject[j]);
    // }
    // if(students()[i].marksForSubject[i].math > 90)
    // {
    //     console.log("Above 90");
    // }
}
