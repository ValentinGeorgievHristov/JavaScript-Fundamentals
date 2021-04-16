function math(product, quantity) {

    let bill = null;
    let coffee = 1.5;
    let water = 1.0;
    let coke = 1.4;
    let snacks = 2.0;

    switch (product) {
        case 'coffee':
            bill = (a, b) => (a * b);
            break;
        case water :
            bill = (a, b) => (a * b);
            break;
        case 'coke':
            bill = (a, b) => (a, b);
            break;
        case 'snacks':
            bill = (a, b) => (a, b);
            break;
    }

    let result = bill(product, quantity);
    console.log(result);
    

}
math(water, 5)