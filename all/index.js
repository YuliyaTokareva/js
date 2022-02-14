const cleanTransactionsList = (arr) => {
  let resultArr = [];
  arr.forEach((el) => {
    let stringEl = String(el);
    if (!/[a-zA-Z]/.test(stringEl)) {
      resultArr.push(`$` + Number.parseFloat(stringEl).toFixed(2));
    }
  });
  console.log(resultArr);
  return resultArr;
};
cleanTransactionsList(["  1.9 ", "16.4", 17, " 1 dollar "]); ////['$1.90', '$16.40', '$17.00']
//console.log(cleanTransactionsList(["  1.9 ", "16.4", 17, " 1 dollar "]));
