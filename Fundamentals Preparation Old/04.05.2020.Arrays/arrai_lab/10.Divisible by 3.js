function solve(num) { // РЕШЕНИЕ НА ПРЕПОДАВАТЕЛ !!! ПРЕГЛЕДАЙ
    let oddCounter = num;
    let counter = 1;
    let sum = 0;
    while (oddCounter > 0) {
        if (counter % 2 == 1) { // РЕШЕНИЕ НА ПРЕПОДАВАТЕЛ !!! ПРЕГЛЕДАЙ
            console.log(counter);
            sum += counter
            oddCounter--;
        }
        counter++ // РЕШЕНИЕ НА ПРЕПОДАВАТЕЛ !!! ПРЕГЛЕДАЙ
    }
    console.log(`Sum: ${sum}`);
}
solve(5);