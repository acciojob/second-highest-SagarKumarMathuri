// function secondHighest(arr) {
//   if (arr.length < 2) return -Infinity;

//   let highest = -Infinity;
//   let second = -Infinity;

//   for (let num of arr) {
//     if (num > highest) {
//       second = highest;
//       highest = num;
//     } else if (num > second && num < highest) {
//       second = num;
//     }
//   }

//   return second;
// }
function secondHighest(arr) {
  if (arr.length < 2) return -Infinity;

  let max = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num > second && num < max) {
      second = num;
    }
  }

  return second;
}