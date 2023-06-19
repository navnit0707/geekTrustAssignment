const fs = require("fs");
const os = require("os");

function readinputs(filePath) {
  try {
    console.log(filePath);
    const inputData = fs.readFileSync(filePath, "utf8");
    // console.log(inputData);

    const inputArray = inputData.split(os.EOL);
    // console.log(inputArray);
    return inputArray;
  } catch (error) {
    console.log("error in reading ", error);
    return error;
  }
}

module.exports = {
  readinputs,
};
