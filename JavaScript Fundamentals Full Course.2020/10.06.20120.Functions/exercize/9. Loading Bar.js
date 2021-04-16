function parcentage(parc) {
    if(parc==100){
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
        return
    }
    const devider = 10;
    const percantageCount = parc / devider;
    const dotCount = 10 - percantageCount;
    let dot = '';
    let percentage = '';
    

    for (let i = 0; i < percantageCount; i++) {
        percentage += '%';
    }
    for (let j = 0; j < dotCount; j++) {
        dot+='.';
    }

    console.log(`${parc}% [${percentage}${dot}]`);
    console.log('Still loading...');

}
parcentage(30)