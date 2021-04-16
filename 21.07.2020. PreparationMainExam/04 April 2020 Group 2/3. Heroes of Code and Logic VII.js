function solve(input) {
    let countPlayers = Number(input.shift())
    let heroes = {};

    for (let i = 0; i < countPlayers; i++) {
        let [hero, hitPoints, manaPoints] = input.shift().split(' ');
        hitPointsObject = Number(hitPoints);
        manaPointsObject = Number(manaPoints);
        // if (!heroes[hero]) {
        //     heroes[hero] = {};
        //     heroes[hero].hitPointsObeject = Number(hitPoints);    //грешно е парсването!!!
        //     heroes[hero].manaPointsObject = Number(manaPoints);     //грешно е парсването!!!
        // }
        heroes[hero] = {
            hitPointsObject,
            manaPointsObject
        }
        // console.log(`${hero} - ${heroes[hero].hitPoints2} - ${heroes[hero].manaPoints2}` );                                     //итерирани!
    }
    //console.log(heroes['Solmyr'].hitPointsObeject);

    let commands = input.shift();
    while (!(commands == 'End')) {

        let [command, newHero, twoText, three] = commands.split(' - ');
        let two = Number(twoText);

        switch (command) {
            case 'CastSpell':
                if (heroes[newHero].manaPointsObject - two >= 0) {
                    heroes[newHero].manaPointsObject -= two
                    console.log(`${newHero} has successfully cast ${three} and now has ${heroes[newHero].manaPointsObject} MP!`);
                } else {
                    console.log(`${newHero} does not have enough MP to cast ${three}!`);
                }
                break;
            case 'TakeDamage':
                if (heroes[newHero].hitPointsObject - two >= 0) {
                    heroes[newHero].hitPointsObject -= two;
                    console.log(`${newHero} was hit for ${two} HP by ${three} and now has ${ heroes[newHero].hitPointsObject} HP left!`)
                } else {
                    console.log(`${newHero} has been killed by ${three}!`);
                    delete heroes[newHero]
                }
                break;
            case 'Recharge':
                if (heroes[newHero].manaPointsObject + two >= 200) {
                    let oldMp = heroes[newHero].manaPointsObject;
                    heroes[newHero].manaPointsObject = 200;
                    console.log(`${newHero} recharged for ${200 - oldMp} MP!`)
                } else {
                    heroes[newHero].manaPointsObject += two;
                    console.log(`${newHero} recharged for ${two} MP!`)
                }
                break;
            case 'Heal':
                if (heroes[newHero].hitPointsObject + two >= 100) {
                    let oldHp = heroes[newHero].hitPointsObject
                    heroes[newHero].hitPointsObject = 100;
                    console.log(`${newHero} healed for ${100- oldHp} HP!`);
                } else {
                    heroes[newHero].hitPointsObject += two;
                    console.log(`${newHero} healed for ${two} HP!`)
                }
                break;
        }
        commands = input.shift();
    }

    let entries = Object.entries(heroes).sort(compare)
    
    for (const key of entries) {
        //console.log(key[0],  key[1], key[1].hitPointsObject, key[1].manaPointsObject)
        console.log(`${key[0]}\n  HP: ${key[1].hitPointsObject}\n  MP: ${key[1].manaPointsObject}`)
    }
    
    function compare(a, b) {
 
        if (b[1].hitPointsObject < a[1].hitPointsObject) 
            return -1;
        if (b[1].hitPointsObject === a[1].hitPointsObject) 
         return a[0].localeCompare(b[0])
 
    }

}
solve(
    // [
    //     '2',
    //     'Solmyr 85 120', // hero / hitpoints (100max) /mana points (100max)
    //     'Kyrre 99 50', // ok
    //     'Heal - Solmyr - 10',
    //     'Recharge - Solmyr - 50',
    //     'TakeDamage - Kyrre - 66 - Orc',
    //     'CastSpell - Kyrre - 15 - ViewEarth',
    //     'End'
    // ]
    [
        '4',
        'Adela 90 150',
        'SirMullich 70 40',
        'Ivor 1 111',
        'Tyris 94 61',
        'Heal - SirMullich - 50',
        'Recharge - Adela - 100',
        'CastSpell - Tyris - 1000 - Fireball',
        'TakeDamage - Tyris - 99 - Fireball',
        'TakeDamage - Ivor - 3 - Mosquito',
        'End'
    ]
)