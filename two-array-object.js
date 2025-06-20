// add whatever parameters you deem necessary
function twoArrayObject(keyArr, valArr) {
  let result = {};
  let i = 0;
  let j = 0;
  while (i < keyArr.length && j < valArr.length) {
    result[keyArr[i]] = valArr[j];
    i++;
    j++;
  }

  while (i < keyArr.length) {
    result[keyArr[i]] = null;
    i++;
  }

  return result;
}

module.exports = { twoArrayObject };
