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
  // At first, a module of mass 1969 requires 654 fuel.
  // Then, this fuel requires 216 more fuel (654 / 3 - 2).
  // 216 then requires 70 more fuel, which requires 21 fuel, which requires 5 fuel, which requires no further fuel.
  // So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.
  // Math.floor(number / 3) - 2;
  let result = 0;
  const recurse = (num: number) => {
    if (Math.floor(num / 3) - 2 > 0) {
      result += Math.floor(num / 3) - 2;
      recurse(Math.floor(num / 3) - 2);
    } else {
      return;
    }
  };

  numbers.forEach(number => {
    recurse(number);
  });

  return result;
};

loadNumbers();
