function solve(sim1, sim2) { //НЕ СТАВА НЕЩО
    let nesTea = 0;
    let zaek = " ";
    if (sim2.charCodeAt(0) < sim1.charCodeAt(0)) {
        nesTea = sim1; //Триъгълник с трета променлива!
        sim1 = sim2;
        sim2 = nesTea;
        //        console.log(sim1);
        //        console.log(sim2);
    }
    for (let i = sim1.charCodeAt(0) + 1; i < sim2.charCodeAt(0); i++) {
       // console.log(String.fromCharCode(i));
        zaek+=(`${String.fromCharCode(i)} `);
  
    }
        return zaek;
}
console.log(solve('#',':')); // $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9