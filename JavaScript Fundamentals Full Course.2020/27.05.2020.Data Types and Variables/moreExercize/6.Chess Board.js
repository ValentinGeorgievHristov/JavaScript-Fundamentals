function solve(num) {

    let text = '<div class="chessboard">\n';
    let counter = 0;
    for (let i = 0; i < num; i++) {
        text += '  <div>\n';
        for (let j = 0; j < num; j++) {
            counter++;
            if (counter % 2 === 1) {
                text += '  \t<span class="black"></span>\n';
            } else {
                text += '  \t<span class="white"></span>\n';
            }
        }
        text += '  </div>\n';
    }
    console.log(text);
    console.log(  </div>\)
}

solve(3)