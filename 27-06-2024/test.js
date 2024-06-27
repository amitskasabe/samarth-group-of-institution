// const result = [1,2,3];
// const result1 = [1,2,"ai" , {name : 1}];

const Person = {
    name: "amit",
    suranem: "kasabe",
    title: "founder",
    companyName: "codeseed"
}
// map , filter , reduce ( accumentor )
// console.log(Person.name);

const People = [
    {
        name: "amit",
        suraname: "kasabe",
        title: "founder",
        companyName: "codeseed"
    },
    {
        name : "shruti",
        suraname: "lokhande",
        title : "Manager",
        companyName : "codeseed"
    },
    {
        name: "Priya",
        surname: "Singh",
        title: "Marketing Specialist",
        companyName: "CodeSeed"
    },
    {
        name: "Anuj",
        surname: "Gupta",
        title: "HR Manager",
        companyName: "CodeSeed"
    },
    {
        name: "Neha",
        surname: "Patil",
        title: "Content Writer",
        companyName: "CodeSeed"
    },
    {
        name: "Vikram",
        surname: "Joshi",
        title: "Sales Executive",
        companyName: "CodeSeed"
    },
    {
        name: "Pooja",
        surname: "Desai",
        title: "Graphic Designer",
        companyName: "CodeSeed"
    },
    {
        name: "Manoj",
        surname: "Mehta",
        title: "Financial Analyst",
        companyName: "CodeSeed"
    },
    {
        name: "Ritu",
        surname: "Malhotra",
        title: "Customer Support",
        companyName: "CodeSeed"
    },
];
const data = document.querySelector("#dynamicData");
console.log(data);
for(let i=0;i<People.length;i++)
{
    document.write(`<td>${People[i].name}</td>`)
}