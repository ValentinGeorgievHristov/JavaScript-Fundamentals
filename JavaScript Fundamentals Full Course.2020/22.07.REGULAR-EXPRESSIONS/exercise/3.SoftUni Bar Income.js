function solve(input) { // има проблем
 let pattern =/(?<custumer>[A-Z][a-z]+)%<(?<product>[\w]+)>\|(?<quantity>[0-9]+)|(?<price>[\d]+\.?[\d]*)\$/
}
solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
  ])