function substituteF(str, a, b) {

    if (str.includes(a)) {
        while (str.indexOf(a) > -1) {
            str = str.replace(a, b);
        }
        let pass = str;
        return pass;
    }else{
        return 'Nothing to replace!';
    }
}
substituteF('icecream::hot::mer', '1', `-`)
// while (text.indexOf(one) > -1) {
//     text = text.replace(one, two);
// }