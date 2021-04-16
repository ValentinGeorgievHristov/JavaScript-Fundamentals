function solve(arr) {

    let odd = array(arr)
    let calculated = calculateOdd(odd)
    console.log(calculated);

    function calculateOdd(a) {

        let result = '';

        for (let i = 0; i < a.length; i++) {
            result += (a[i] * 2 + ' ');

        }

        return result
    }

    function array(a) {

        let oddSum = [];

        for (let i = 0; i < a.length; i++) {
            if (i % 2 === 1) {
                oddSum.unshift(a[i])
        
                
            }
        
        }
        return oddSum
        }

}
solve([10, 15, 20, 25])