function obj(firstName,lastName,age ) {

    const person = {
        firstName,
        lastName,
        age 
    }; 
   let entries = Object.entries(person);
   console.log(entries);
   for (const [key, value] of entries) {
         console.log(`${key}: ${value}`);
     }
}
obj("Peter",
    "Pan",
    "20"
)