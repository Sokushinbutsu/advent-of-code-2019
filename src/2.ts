const fs = require("fs");

let csv = [];
let data = fs.readFileSync(`${__dirname}/data/2.csv`, "utf8");
let dataString = data.split(",");
for (let i = 0; i < dataString.length; i++) {
  csv.push(parseInt(dataString[i]));
}

const compute = csv => {
  for (let i = 0; i < csv.length; i += 4) {
    if (i === 99) {
      break;
    } else if (csv[i] === 1) {
      let x = csv[i + 1];
      let y = csv[i + 2];
      let sigma = csv[x] + csv[y];
      let destination = csv[i + 3];

      csv[destination] = sigma;
    } else if (csv[i] === 2) {
      let x = csv[i + 1];
      let y = csv[i + 2];
      let sigma = csv[x] * csv[y];
      let destination = csv[i + 3];

      csv[destination] = sigma;
    }
  }
  if (csv[0] === 19690720) {
    console.log(csv[1]);
    console.log(csv[2]);
    console.log(100 * csv[1] + csv[2]);
  }
};

for (let i = 0; i < 99; i++) {
  for (let j = 0; j < 99; j++) {
    let clone = [...csv];
    clone[1] = i;
    clone[2] = j;
    compute(clone);
  }
}
