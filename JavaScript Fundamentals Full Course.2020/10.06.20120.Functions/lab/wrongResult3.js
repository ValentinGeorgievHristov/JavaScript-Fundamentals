wrongResult = (...nums) => { /// ?????????????????????????????

    const isNegativeMultiply = (nums) => {
        //console.log(nums);
        
        let negativeCount = 0;
        for (let num of nums) {
            if (num === 0) {
                return false;
            }
            if (num < 0) {
                negativeCount++;
            }
        }

        return negativeCount % 2 === 1;
    };

    return (isNegativeMultiply(nums) ? 'Negative' : 'Positive');
};
console.log(wrongResult(5, 12, -15));