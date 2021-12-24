var fs = require("fs").promises;

//var csv is the CSV file with headers
async function csv2JSON(csvFile) {
  //* var data = fs.readFileSync(csvFile);
  const data = await fs.readFile(csvFile);
  var stringData = data.toString();

  //console.log(stringData);
  var arrayOne = stringData.split("\r\n");
  //console.log(String(arrayOne[0]).replace(/"/g, ""));

  var header = arrayOne[0].replace(/"/g, "").split(";");
  //var noOfRow = arrayOne.length; // sao muitos regitros retornando so os primeiros 1000
  var noOfRow = 1000;
  var noOfCol = header.length;

  var json = [];

  var i = 0,
    j = 0;
  for (i = 1; i < noOfRow - 1; i++) {
    var reg = {};
    for (j = 0; j < noOfCol; j++) {
      var myNewLine = arrayOne[i].replace(/"/g, "").split(";");
      reg[header[j]] = myNewLine[j];
    }
    json.push(reg);
  }

  return json;
}

async function returnJSON(jsonFile) {
  //* var data = fs.readFileSync(csvFile);
  const data = await fs.readFile(jsonFile);
  var stringData = data.toString();
  return stringData;
}

export default async function handler(req, res) {
  //var json = await csv2JSON("./public/cadastro_estabelecimentos_cnes.csv");
  var json = await returnJSON(
    "./public/cadastro_estabelecimentos_cnes_small.json"
  );
  res.status(200).json(json);
  //res.status(200).json(json);
}
