
function shuffleArray(array) {
    if (array.length <= 1) {
      return array;
    }
  
    const mid = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, mid);
    const rightHalf = array.slice(mid);
  
    const shuffledLeft = shuffleArray(leftHalf);
    const shuffledRight = shuffleArray(rightHalf);
  
    return mergeArrays(shuffledLeft, shuffledRight);
  }
  
  function mergeArrays(left, right) {
    const merged = [];
    let i = 0;
    let j = 0;
  
    while (i < left.length && j < right.length) {
      if (Math.random() < 0.5) {
        merged.push(left[i]);
        i++;
      } else {
        merged.push(right[j]);
        j++;
      }
    }
  
    while (i < left.length) {
      merged.push(left[i]);
      i++;
    }
  
    while (j < right.length) {
      merged.push(right[j]);
      j++;
    }
    return merged;
  }

module.exports = shuffleArray