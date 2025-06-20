// add whatever parameters you deem necessary

function createFrequencyCounter(num) {
  const freqs = {};
  for (let digit of num.toString()) {
    freqs[digit] = (freqs[digit] || 0) + 1;
  }
  return freqs;
}

function sameFrequency(num1, num2) {
  let num1Freqs = createFrequencyCounter(num1);
  let num2Freqs = createFrequencyCounter(num2);

  for (let digit in num1Freqs) {
    if (num1Freqs[digit] !== num2Freqs[digit]) {
      return false;
    }
  }

  return true;
}

module.exports = { sameFrequency };
