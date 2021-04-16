function solve(firstName,lastName,age ) {

    const person = {
        firstName,
        lastName,
        age 
    }; 
   let entries = Object.entries(person);
  // console.log(entries)
   for (const [key, value] of entries) {
         console.log(`${key}: ${value}`);
     }
 }

solve("Peter", "Pan", "20");