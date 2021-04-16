    function compare(a, b) {

        if (a < b) {
            return -1;
        }else{
           return a.localeCompare(b)
        }
        
    }
    compare();

//-------------------------------------------------------------------------------------------------------------------------------

function compare(a, b) {
        
    if (a[1].length > b[1].length) {
        return -1;
    } else {
        return a[0].localeCompare(b[0])
    }

}
compare();