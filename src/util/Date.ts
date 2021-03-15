import moment from 'moment';

export function transformDate(date, format = 'DD/MM/YYYY') {
  return moment(date).format(format);
}

export const delay = async (t: number) =>
  new Promise(resolve => setTimeout(resolve, t));
