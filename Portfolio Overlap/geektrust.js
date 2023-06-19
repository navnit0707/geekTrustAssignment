const {
  overlapPercentage,
  addStock,
  calculateOverlap,
  currentPortfolio,
} = require("./utility/calculateFunction");

const { readinputs } = require("./utility/readinput");

const filePath = process.argv[3];

const inputValue = readinputs(filePath);
// console.log(inputValue);

const portFolio = inputValue[0].split(" ").slice(1);
// console.log("Portfolio data", portFolio);

inputValue.slice(1).forEach((tempValue, index) => {
  if (tempValue.length === 0) return;

  // console.log("inputValue : ", tempValue);

  const tempCheck = tempValue.split(" ");
  // console.log(tempCheck);

  if (tempCheck[0] === "CALCULATE_OVERLAP") {
    const tempChecks = tempValue.split(" ");
    console.log(
      "values of stock inside overlap: ",
      portFolio,
      tempChecks.slice(1)
    );
    calculateOverlap(portFolio, tempChecks.slice(1));
    //const result = calculateOverlap(portFolio, tempCheck);
  }
  // if (tempCheck[0] === "OVERLAP_PERCENTAGE") {
  //   // const result = overlapPercentage(args);
  // }
  // if (tempCheck[0] === "ADD_STOCK") {
  //   // const result = addStock();
  // }
  // return;
});
