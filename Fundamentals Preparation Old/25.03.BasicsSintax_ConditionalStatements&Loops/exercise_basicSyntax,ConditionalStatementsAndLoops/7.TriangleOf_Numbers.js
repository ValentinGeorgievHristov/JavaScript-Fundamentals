function solve(num) {
    //    for (let row = 1; row <= num; row++) {              // Решение на пирамидата с repeat
    //console.log(`${row} `.repeat(row));
    // }


    let output = "";                 // РЕШЕНИЕ С ВЛОЖЕН ЦИКЪЛ!!!
    for (let row = 1; row <= num; row++) {
        for (let col = 1; col <= row; col++) {
            output += row+ " ";
        }
        output+=`\n`
    }
    console.log(output);
}
solve(9)