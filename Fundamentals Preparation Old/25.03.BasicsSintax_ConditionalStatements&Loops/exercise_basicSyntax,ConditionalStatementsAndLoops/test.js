function solve(input) {
    let numTicket = input.shift();
    let i = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let bestPrice = 0;
    let bestNumticket="";

    while (numTicket !== "End") {

        let price = Number(input.shift());
        let minutes = Number(input.shift());
        i++;
        if (min > minutes) {
            min = minutes;
            bestPrice = (price*1.96).toFixed(2);
            bestNumticket = numTicket;
        }

        numTicket = input.shift();
    }
let newMinutes = min%60; 
let hours = Math.floor(min/60) 

    console.log(`Ticket found for flight ${bestNumticket} costs ${bestPrice} leva with ${hours}h ${newMinutes}m stay`)
}
solve([
    'W64301', '60',
  '140',    'W30510',
  '110',    '40',
  'W51440', '160',
  '70',     'FR0066',
  '75',     '75',
  'End'

])