const expYearList = () => {
  let yearsToShow = 20;
  let thisYear = new Date().getFullYear();
  let years = [];

  for (let y = thisYear; y < thisYear + yearsToShow; y++) {
    let year = y.toString().substring(2);
    years.push({ value: year, text: year });
  }

  return years;
};

export default expYearList;
