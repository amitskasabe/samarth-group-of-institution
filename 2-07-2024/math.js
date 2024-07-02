// export function add(a, b){
//     console.log(a+b);
// }

const add = (a , b) => {
    return a+b;
}
const sub = (a , b)=>{
    console.log(a-b);
}
const multiplication = (a, b) => {
    console.log(a *b);
}
const division = (a, b) => {
    console.log(a/b);
}
export {
    add,
    sub,
    multiplication as mul,
    division as div
}