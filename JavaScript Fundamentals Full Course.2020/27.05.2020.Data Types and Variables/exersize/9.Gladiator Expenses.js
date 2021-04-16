 function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

     let everyNewHelmet = Math.floor(lostFights / 2);
     let everyNewSword = Math.floor(lostFights / 3);
     let everyNewShield = Math.floor(lostFights / 6);
     let repairArmor =lostFights>=12? Math.floor((lostFights / 12) * armorPrice) : 0;

   let helmetTotal = everyNewHelmet* helmetPrice;
   let swordTotal = everyNewSword* swordPrice;
   let shieldTotal = everyNewShield* shieldPrice;
   let armorTotal = repairArmor

     let res = (helmetTotal + swordTotal + shieldTotal + armorTotal).toFixed(2);

     console.log(`Gladiator expenses: ${res} aureus`)
 }
 solve(23,
  12.50,
  21.50,
  40,
  200
  );