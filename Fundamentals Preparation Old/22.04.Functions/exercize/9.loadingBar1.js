function solve(perc) {
    if(perc==100){
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
        return
    }
    const devider = 10;
    const percantageCount = perc / devider;
    const dotCount = 10 - percantageCount;
    let dot = '';
    let percentage = '';
    

    for (let i = 0; i < percantageCount; i++) {
        percentage += '%';
    }
    for (let j = 0; j < dotCount; j++) {
        dot+='.';
    }

    console.log(`${perc}% [${percentage}${dot}]`);
    console.log('Still loading...');

}
solve(20)