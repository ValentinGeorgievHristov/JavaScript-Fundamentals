function gladiator(losts,helmetPrice,swordPrice,shieldPrice,armorPrice){
let newHelmet= Math.floor(losts/2);
let newSword= Math.floor(losts/3);
let newShield =Math.floor(losts/6); //най- малко общо кратно :)
let repeyredArmor = Math.floor(losts/12);

let sum = (newHelmet*helmetPrice+newSword*swordPrice+newShield*shieldPrice+repeyredArmor*armorPrice).toFixed(2);

console.log(`Gladiator expenses: ${sum} aureus`);

}
gladiator(
    23,
    12.50,
    21.50,
    40,
    200
    
)