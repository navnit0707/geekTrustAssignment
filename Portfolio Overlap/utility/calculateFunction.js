const { getFundByName } = require("./fundNameValidation");
const stockData = require("./stockData.json");

function calculateOverlap(portFolio, stockName) {
  // console.log("inside calculate", portFolio, stockName);

  portFolio.forEach((portFolioEntity, i) => {
    let array1 = stockData.funds.filter(
      (value) => value.name === portFolioEntity
    );
    let array2 = stockData.funds.filter((value) => value.name === stockName[0]);
    // console.log("array1 and array2 : ", array1, array2);
    const sameData = array1[0].stocks.filter((element) =>
      array2[0].stocks.includes(element)
    );
    const overlapPercent =
      (2 * sameData.length * 100) /
      (array1[0].stocks.length + array2[0].stocks.length);
    console.log(
      `${stockName[0]} ${portFolioEntity} ${overlapPercent.toFixed(2)}%`
    );
  });
}

function addStock(args) {
  const fundName = args[0];
  const stockName = args[1];
  const fund = getFundByName(fundName);
  if (!fund) {
    console.log("FUND_NOT_FOUND");
    return;
  }

  fund.stocks.push(stockName);
  console.log("Stock added successfully");
}

module.exports = {
  calculateOverlap,
  addStock,
};
