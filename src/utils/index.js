export const States = { NY: 'New York, NY' };
export const Months = {
  1: 'Jan',
  2: 'Feb',
  3: 'Mar',
  4: 'Apr',
  5: 'May',
  6: 'Jun',
  7: 'Jul',
  8: 'Aug',
  9: 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec'
};

const getDateString = (date) =>
  `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;

export const getRoleLength = (start, end) => {
  let months = 0;
  months = (end.getFullYear() - start.getFullYear()) * 12;
  months -= start.getMonth();
  months += end.getMonth();

  if (months >= 12) {
    const yrs = Math.floor(months / 12);
    const mos = months % 12;
    return `${yrs} yrs${mos > 0 ? ` ${mos} ${mos > 1 ? 'mos' : 'mo'}` : ''}`;
  }
  return months <= 1 ? '1 mo' : `${months} mos`;
}

export const getWorkTimeframe = (start, end, current) => {
  const now = getDateString(new Date(Date.now()));
  const _end = getDateString(end);
  const _start = getDateString(start);
  return `${_start} - ${now === _end && current ? 'Present' : _end} · ${getRoleLength(start, end)}`;
};