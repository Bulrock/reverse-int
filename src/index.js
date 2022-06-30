module.exports = function reverse (n) {
    let result = '';
    let nAbs = Math.abs(n);
    let nAbsString = nAbs.toString();
  for (let i = -1; i >= -nAbsString.length; i--){
    let slicedNumeral = nAbsString[nAbsString.length+i]
    result = `${result}${slicedNumeral}`
  }
  return result;
}
