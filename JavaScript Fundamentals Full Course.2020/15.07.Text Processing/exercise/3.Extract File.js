function solve(inputString) {

    // let splitted = inputString
    // .split('\\')
    // .filter(x => x.includes('.'));
    // // console.log(splitted);
    
    // for (const key of splitted) {
    //     console.log(key);
    // }

    let lastIndexOfDashes = inputString.lastIndexOf('\\');

    let fileInfo = inputString.substring(lastIndexOfDashes+1);

    let lastIndexOfDot = fileInfo.lastIndexOf('.');

    let fileName = fileInfo.substring(0,lastIndexOfDot);
    let fileExtension = fileInfo.substring(lastIndexOfDot+1);
    
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`)
}
solve('C:\\Projects\\Data-Structures\\LinkedList.cs')

