function solve(input) {
  let obj = {};
   input.forEach(element => {
     

      let [town, latitude, longitude]= element.split(' | ');
       
       obj.town = town;
       obj.latitude = Number(latitude).toFixed(2)
       obj.longitude = Number(longitude).toFixed(2);

       console.log(obj);
   });


}
solve(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
        ],
        [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
        ]
        
        )

        // Chips -> 5
        // CocaCola -> 9
        // Bananas -> 44
        // Pasta -> 11
        // Beer -> 2
        // Flour -> 44
        // Oil -> 12
        // Tomatoes -> 70
        
