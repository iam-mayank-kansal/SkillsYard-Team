let data: number = 12;
console.log(data)

let num: number[] = [1, 1]

// typescirpt also have a new type tuples 

let user: [number, string] = [1, "ram"]
user.push(1)

// enum used for grouping 

const enum Size { small = 1, medium, large };
// medium = 1+1 
// large = 1+1+1
console.log(Size.large)

let mySize: Size = Size.medium;
console.log(mySize)


let employee: {
    id: number,
    name?: string
} = { id: 1 };
let employees: {
    id: number,
    name: string
} = { id: 1, name: "mayank" };

employee.name = "rahul";
employee.id = 12;

console.log(employee)