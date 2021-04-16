 function solve(arr) {
     let employees = [];

     for (let personName of arr) {
         let personObject = {                       // отдолу е поместен тук еквивалентен
           name: personName,                        // отдолу е поместен тук еквивалентен
           personNumber: personName.length          // отдолу е поместен тук еквивалентен
         };

        //  personObject.name = personName;                  //запоса е поместен горе
        //  personObject.personNumber = personName.length;

         employees.push(personObject);
     }
   for(let employee of employees){
       console.log(`Name: ${employee.name} -- Personal Number: ${employee.personNumber}`)
   }
 }
 solve([
     'Silas Butler',
     'Adnaan Buckley',
     'Juan Peterson',
     'Brendan Villarreal'
 ]);