function solve(name, lastName, hairColor ) {
    let obj={
        name,
        lastName,
        hairColor
    }
    entries = Object.entries(obj);
    for (const [key,value] of entries) {
       
    }
    console.log(JSON.stringify(obj));
}
solve(
'George',
'Jones',
'Brown'
);