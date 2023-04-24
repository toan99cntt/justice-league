import moment from 'moment';

export const formatDate = (time: string, format = 'DD-MM-YYYY') => {
  return moment(time).format(format);
};
