function solve(input) {
  
    input.forEach(element => {
        element.split(' ')
        console.log(`Name: ${element} -- Personal Number: ${element.length}`);        
    });
}
solve(
    [   'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
        ]
        )