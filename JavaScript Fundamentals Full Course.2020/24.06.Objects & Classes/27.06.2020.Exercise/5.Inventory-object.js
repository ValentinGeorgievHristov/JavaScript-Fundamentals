function solve(arr) {   // не успях да я реша
    const obj = {};
        arr.forEach((element, i) => {
        splited=(element.split('/'));
        [hero,level, items] = splited;
        obj.hero= hero;
        obj.level= level;
        obj.items = items;

       let sorting = level.sort(function(a, b){
            return a.level - b.level;
        })

        console.log(sorting);
    });
    

}
solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
])