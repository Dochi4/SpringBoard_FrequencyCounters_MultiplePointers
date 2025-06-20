// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  if (str1.length > str2.length) return false;
  if (!str1) return true;

  let i = 0;
  let j = 0;

  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }
    j++;
  }

  return i === str1.length;
}

module.exports = { isSubsequence };
