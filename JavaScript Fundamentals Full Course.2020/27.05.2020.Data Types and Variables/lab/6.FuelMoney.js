function name(distance, people, price) {
    let costOneEmpty = (distance / 100) * 7;
    costOneEmpty += 0.100 * people;
    let result = costOneEmpty * price;

    console.log(`Needed money for that trip is ${result}lv.`);
    
}
name(260, 9, 2.49);