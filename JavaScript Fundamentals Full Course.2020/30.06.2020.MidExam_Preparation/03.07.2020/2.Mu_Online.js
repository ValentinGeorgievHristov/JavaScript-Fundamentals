function solve(input) {
    let health = 100;
    let bitcoins = 0;
    let splitted = input.split('|');
    let counter = 1;
    let bestRoom = counter;
    let isLive = true;
    //console.log(splitted);
    for (let el of splitted) {
        counter++;
        let commands = el.split(' ');
        let monster = commands[0];
        let points = Number(commands[1]);

        if (monster == 'potion') {
            if (health + points <= 100) {
                health += points
            } else {
                health = 100;
            }
            //health=Math.min(100, health+points);
            console.log(`You healed for ${points} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (monster == 'chest') {
            bitcoins += points;
            console.log(`You found ${points} bitcoins.`);
            bestRoom = counter
        } else {
            if (health > points) {
                health -= points;
                console.log(`You slayed ${monster}.`);
                function solve(input) {
    let health = 100;
    let bitcoins = 0;
    let splitted = input.split('|');
    let counter = 1;
    let bestRoom = counter;
    let isLive = true;
    //console.log(splitted);
    for (let el of splitted) {
        counter++;
        let commands = el.split(' ');
        let monster = commands[0];
        let points = Number(commands[1]);

        if (monster == 'potion') {
            if (health + points <= 100) {
                health += points
            } else {
                health = 100;
            }
            //health=Math.min(100, health+points);
            console.log(`You healed for ${points} hp.`);
            console.log(`Current health: ${health} hp.`);
            

        } else if (monster == 'chest') {
            bitcoins += points;
            console.log(`You found ${points} bitcoins.`);
            bestRoom = counter
        } else {
            if (health > points) {
                health -= points;
                console.log(`You slayed ${monster}.`);
                

            } else {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${bestRoom}`);
                islive == false;
                break
            }

        }
     

    }

}

             } 

        }
     

    }
       if (isLive==true) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
   }
}
solve('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000')
// health - 100
// bitcoins - 0

// при potion - вдигам здравето до 100 максимум, първо принтирам -"You healed for {amount} hp.".
//  после "Current health: {health} hp.".

//  "chest" - принтирам- "You found {amount} bitcoins."

//  o	If you are not dead (health <= 0) you've slain the monster, and you should print ("You slayed {monster}.")
//  o	If you've died, print "You died! Killed by {monster}." and your quest is over. Print the best room you`ve manage to reach: "Best room: {room}".
//  "You've made it!", "Bitcoins: {bitcoins}", "Health: {health}".