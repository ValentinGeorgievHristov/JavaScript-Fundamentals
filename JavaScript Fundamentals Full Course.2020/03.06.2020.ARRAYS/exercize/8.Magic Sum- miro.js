function magicSum(array, magicNumber) {

    let result = [];

    for (let i = 0; i < array.length; i++) {

        let currentElement = array[i];

        for (let index = i + 1; index < array.length; index++) {

            let nextElement = array[index];
            let isMagic = (currentElement + nextElement) === magicNumber;

            if ((isMagic)) {
                result.push(`${currentElement} ${nextElement}`);
            }
        }
    }
    console.log(result.join('\n'));
}
magicSum(
    [1, 7, 6, 2, 19, 23],
    8
)