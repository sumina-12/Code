//worksheet7.js objects
let person = {
    name: "Sumina",
    cast: "Shrestha",
    age: 17,
    city: "Bhaktapur"
};
console.log(person);

console.log(person.name);
console.log(person.cast);
console.log(person.age);

person.city = "Kathmandu";
console.log(person);

//output:
// { name: 'Sumina', cast: 'Shrestha', age: 17, city: 'Bhaktapur' }
// Sandesh
// Ghimire
// 17
// { name: 'Sumina', cast: 'Shrestha', age: 17, city: 'Kathmandu' }