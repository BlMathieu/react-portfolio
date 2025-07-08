export function calculateYearsOld(born: Date) {
  const now = new Date();
  const born_date = new Date(born);

  let years_old = now.getFullYear() - born_date.getFullYear();

  const mouth = now.getMonth() - born_date.getMonth();
  const day = now.getDate() - born_date.getDate();

  if (mouth < 0 || (mouth === 0 && day < 0)) {
    years_old--;
  }

  return years_old;
}
