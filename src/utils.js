export const validateDate = (day, month, year) => {
  const pDay = parseInt(day, 10);
  const pMonth = parseInt(month, 10);
  const pYear = parseInt(year, 10);

  const date = new Date(pYear, pMonth - 1, pDay);

  const m = date.getMonth() + 1;
  const y = date
    .getFullYear()
    .toString()
    .slice(2, 4);

  return (
    date.getDate() === pDay &&
    parseInt(m, 10) === pMonth &&
    parseInt(y, 10) === pYear
  );
};
