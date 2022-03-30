export const calculateBalance = (numberString) => {
  const arr = numberString.split(" ");
  const allNumbers = arr[0].concat(arr[1]).concat(arr[2]);
  let sum = 0;

  if (numberString[numberString.length - 1] == 2 || numberString[numberString.length - 1] == 5) {
    for (let i = 0; i < allNumbers.length; i++) {
      sum += Number(allNumbers[i]);
    }
  } else {
    return sum;
  }

  return sum;
};
