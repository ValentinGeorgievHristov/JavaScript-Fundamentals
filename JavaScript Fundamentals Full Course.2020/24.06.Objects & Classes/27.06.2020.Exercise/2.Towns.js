function solve(input) {
  let obj = {};
   input.forEach(element => {
     

      let [town, latitude, longitude]= element.split(' | ');
       
       obj.name = town;
       obj.latitude = Number(latitude).toFixed(2)
       obj.longitude = Number(longitude).toFixed(2);

       console.log(obj);
   });


}
solve(
    ['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
        )

// { town: 'Sofia', latitude: '42.70', longitude: '23.33' }
// { town: 'Beijing', latitude: '39.91', longitude: '116.36' }
