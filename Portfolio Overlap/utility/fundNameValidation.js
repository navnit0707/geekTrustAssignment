const fundData = require("./stockData.json");

function getFundByName(fundName) {
  return fundData.find((fund) => fund.name === fundName);
}

module.exports = {
  getFundByName,
};
