function solve(arr) {
    let person={};

    person.firstName =arr[0];
    person.lastName = arr[1];
    person.age = arr[2];
  
    return person;

}
console.log(solve([
    "Peter",
    "Pan",
    "20"

]))