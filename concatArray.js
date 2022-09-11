const { template } = require('@babel/core')

function concatArray(array1, array2) {
  //code here

  if ((array1 === null || array1 === undefined) && (array2 === null || array2 === undefined)){
    return undefined
  }else if ((array1?.lenght === 0 )&& (array2?.lenght === 0)){
    return array1
  }else if (array1 === null || array1 === undefined || array1 === array1?.lenght){
    return array2
  }else if (array2 === null || array2 === undefined || array2 === array1?.lenght){
    return array1
  }
  return array1.concat(array2)
  
}
module.exports = concatArray
