function getDateDifferenceInDays(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
    return diffDays;
  }
  

  const date1 = new Date('2024-02-19');
  const date2 = new Date('2024-02-15');
  const differenceInDays = getDateDifferenceInDays(date1, date2);
  console.log(differenceInDays); 