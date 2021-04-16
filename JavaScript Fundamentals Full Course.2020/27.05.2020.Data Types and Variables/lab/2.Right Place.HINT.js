function name(str1, str2, str3) {

    let res = str1.replace('_', str2);
    let output = res === str3 ? 'Matched' : 'Not Matched';

    console.log(output)

}
name('Str_ng', 'I', 'Strong');