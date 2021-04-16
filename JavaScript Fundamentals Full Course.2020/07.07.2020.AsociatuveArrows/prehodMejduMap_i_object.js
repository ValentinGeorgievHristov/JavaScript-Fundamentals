let phonebook = new Map(); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

phonebook.set('pesho','09882173987')
phonebook.set('gosho','039874928734')
phonebook.set('stamat','0988221387')

//console.log(phonebook.entries())

//let phonebookMap = new Map([[`name`, 'pesho'],['age', 20]]);
let phonebookObj = Object.fromEntries(phonebook.entries()); // получих обект от MAP
console.log(phonebookObj);
//console.log(phonebook);
let phonebookMap =new Map(Object.entries(phonebookObj));
console.log(phonebookMap);;