function solve(inputString) {   // 60 от 100

    inputString
        .split(' ')
        .filter((word) => word.startsWith('#') && word.length > 1)
        .forEach(word => {
            console.log(word.substring(1))
        });
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')