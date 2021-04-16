function mul(list, firstIndex, secondIndex){   //втората формула първо умножение!
    let first = Number(list.splice(firstIndex, 1))
    let second = Number(list.slice(secondIndex-1, secondIndex))
    let multiplyed = first * second;
    list.splice(firstIndex, 0, multiplyed);
//console.log(list);
//console.log(multiplyed);
console.log(second);

return list
}
console.log(mul([  87, 23, 321, -123, 42,  90, -2],1,2))