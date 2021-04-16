function solve(arr) {

  let text = arr.splice(0, 1).toString();

  arr.forEach(line => {
      let [command, one, two] = line.split(':|:');

      switch (command) {
          case 'InsertSpace':
              let firstPart = text.substr(0, one);
              let secondPart = text.substr(one, text.length);
              text = firstPart + ' ' + secondPart;
              console.log(text);
              break;
          case 'Reverse':
              if (text.indexOf(one) > -1) {
                  let l = text.indexOf(one);
                  text = text.substr(0, l);
                  one = reverse(one);
                  text = text.concat(one);

                  //text = text.slice(l, l+one.length);
                  console.log(text);
              } else {
                  console.log('error');
              }
              break;
          case 'ChangeAll':
              while (text.indexOf(one) > -1) {
                  text = text.replace(one, two);
              }
              console.log(text);
              break;
              
              

      }

  });
  console.log(`You have a new text message: ${text}`);

  function reverse(s) {
      return s.split("").reverse().join("");
  }
}
solve(
  //     [
  //     'heVVodar!gniV',
  //     'ChangeAll:|:V:|:l',
  //     'Reverse:|:!gnil',
  //     'InsertSpace:|:5',
  //     'Reveal'
  // ]
  [
      'Hiware?uiy',
      'ChangeAll:|:i:|:o',
      'Reverse:|:?uoy',
      'Reverse:|:jd',
      'InsertSpace:|:3',
      'InsertSpace:|:7',
      'Reveal'
  ]
)