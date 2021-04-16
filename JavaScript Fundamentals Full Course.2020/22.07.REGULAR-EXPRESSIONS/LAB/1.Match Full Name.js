function solve(input) {
    let matchFullName = input;
//      let name = input//.slice();

   
//  let pattarn = (/\b[A-Z][a-z]+ [A-Z][a-z]+\b/g)

//  let result = pattarn.exec(name)
   

//  console.log(result);

//     //          "\ b"
  
matchFullName = (names = []) => {
    console.log(
        names
            .shift()
            .match(/\b[A-Z][a-z]+ [A-Z][a-z]+\b/g)
            .join(' '),
    );
};

}
    solve(["Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"]);