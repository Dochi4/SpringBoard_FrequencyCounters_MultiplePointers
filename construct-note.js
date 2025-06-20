// add whatever parameters you deem necessary
function createFrequencyCounter(array) {
  let frequencies = {};

  for (let val of array) {
    let valCount = frequencies[val] || 0;
    frequencies[val] = valCount + 1;
  }

  return frequencies;
}

function constructNote(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;

  let str1Freqs = createFrequencyCounter(str1);
  let str2Freqs = createFrequencyCounter(str2);

  for (let key of Object.keys(str1Freqs)) {
    if (str2Freqs.hasOwnProperty(key)) {
      if (str2Freqs[key] < str1Freqs[key]) {
        return false;
      }

      return true;
    }
  }
}

module.exports = { constructNote };
