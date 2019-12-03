const fs = require("fs");
const parse = require("csv-parse");

let csv = [];
fs.readFile(`${__dirname}/data/2.csv`, "utf8", function(err, data) {
  let dataString = data.split(",");
  for (let i = 0; i < dataString.length; i++) {
    csv.push(parseInt(dataString[i]));
  }

  csv[1] = 12;
  csv[2] = 2;

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

  console.log(csv);
});
