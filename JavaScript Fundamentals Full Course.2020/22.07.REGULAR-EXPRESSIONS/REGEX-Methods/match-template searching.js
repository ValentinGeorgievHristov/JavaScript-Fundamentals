let name = 'Ivaylo Papazov, Ivaylo Petrov, Petyr Petrov, Georgi Dimitrov, Ivaylo Petrov';

let pattarn = /Ivaylo ([A-Z][a-z]+)/g;

let result = name.match(pattarn) //ако дам в скобите Ivaylo ще върне true

console.log(result);