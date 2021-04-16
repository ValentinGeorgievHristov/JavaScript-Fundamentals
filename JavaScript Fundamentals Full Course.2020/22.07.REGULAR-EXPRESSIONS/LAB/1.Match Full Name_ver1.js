function solve(input) {
    let text = input.toString();
let pattarn = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g

let result = text.match(pattarn);
    console.log(result.join(' '));

}
    solve(["Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"]);