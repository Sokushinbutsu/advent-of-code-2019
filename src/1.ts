const fs = require("fs");
const readline = require("readline");

const loadNumbers = () => {
  let arr: number[] = [];

  const readInterface = readline.createInterface({
    input: fs.createReadStream(`${__dirname}/data/1.txt`)
  });

  readInterface.on("line", function(line) {
    arr.push(line);
  });

  readInterface.on("close", () => {
    console.log(addNumbers(arr));
  });
};

const addNumbers = (numbers: number[]) => {
  // For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
  // For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
  // For a mass of 1969, the fuel required is 654.
  // For a mass of 100756, the fuel required is 33583.
  let result = 0;
  numbers.forEach(number => {
    result += Math.floor(number / 3) - 2;
  });

  return result;
};

loadNumbers();
