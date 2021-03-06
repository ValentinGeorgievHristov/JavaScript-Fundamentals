function race(input) {     //race = (input = []) => {

    let racersNames = new Set(input.shift().split(', ')); 
   // console.log(racersNames);
    let racers = {};

    let patternName = /[A-Za-z]/g,
        patternDistance = /[0-9]/g;

    while ((line = input.shift()) !== 'end of race') {
        let name = line.match(patternName).join('');//????
        //console.log(name);
        let distance = line
            .match(patternDistance)
            .map(Number)
            .reduce((a, b) => a + b, 0);
        if (racersNames.has(name)) {
            console.log(distance);

            if(racers[name]===undefined){     //Ангел е избегнал тази проверка чрез закоментитания код на 23 ред
                racers[name]=0;
            } 
            racers[name] += Number(distance)    // racers[name] = distance + (racers[name] || 0);
            console.log(racers[name]);
        }
    }

    let sortedRacers = Object.keys(racers).sort((a, b) => racers[b] - racers[a]);
    console.log(`1st place: ${sortedRacers[0]}`);
    console.log(`2nd place: ${sortedRacers[1]}`);
    console.log(`3rd place: ${sortedRacers[2]}`);
};
race(
    [
        'George, Peter, Bill, Tom',
        'G4e@55or%6g6!68e!!@',
        'R1@!3a$y4456@',
        'B5@i@#123ll',
        'G@e54o$r6ge#',
        '7P%et^#e5346r',
        'T$o553m&6',
        'end of race'
    ]
)