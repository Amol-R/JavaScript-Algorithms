

const obj = [
    {
        name: 'Sam',
        age: 30,
        siblings: 2
    },
    {
        name: 'Kiran',
        age: 25,
        siblings: 1
    },
    {
        name: 'Hari',
        age: 32,
        siblings: 4
    }]

// I want to print the name from this object having siblings morethan 1
let result = obj.filter(ele => ele.siblings > 1).map(per => per.name)
console.log(result)

// I want to print all the name from this arrey 
const names = obj.map(person => person.name);
console.log(names);

// I want to print the name of person having age more than 25 
const result1 = obj.filter(person => person.age > 25).map(person => person.name);
console.log(result1);