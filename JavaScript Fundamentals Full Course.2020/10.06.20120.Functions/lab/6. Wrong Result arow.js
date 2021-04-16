wrongResult5 = (n1, n2, n3) => {    // ????????????????????
    'use strict'
   
    const sign = (n1, n2, n3) => {
      if ((n1 < 0 && n2 > 0 && n3 > 0) ||
        (n1 > 0 && n2 < 0 && n3 > 0) ||
        (n1 > 0 && n2 > 0 && n3 < 0) ||
        (n1 < 0 && n2 < 0 && n3 < 0))
        return false
      else
        return true
    }
   
    console.log(sign(n1, n2, n3) ? 'Positive' : 'Negative')
  }
  wrongResult5(1,2,4)