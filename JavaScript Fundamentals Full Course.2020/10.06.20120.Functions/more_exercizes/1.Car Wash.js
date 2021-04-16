function carWash(arr) {

    let cleaned = 0; // %

    for (let i = 0; i < arr.length; i++) {

switch (arr[i]){
    case 'soap': cleaned += 10;
    break;
    case 'water': cleaned +=(cleaned * 20) / 100;
    break;
    case 'vacuum cleaner': cleaned +=(cleaned * 25) / 100;;
    break;
    case 'mud': cleaned -=(cleaned * 10) / 100;;
    break;
    // switch (arr[i]){
    //     case 'soap': cleaned += 10;
    //     break;
    //     case 'water': cleaned +=(cleaned * 20) / 100;
    //     break;
    //     case 'vacuum cleaner': cleaned +=(cleaned * 25) / 100;;
    //     break;
    //     case 'mud': cleaned -=(cleaned * 10) / 100;;
    //     break;

}
       

    }
    return (`The car is ${cleaned.toFixed(2)}% clean.`)
}
console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']));