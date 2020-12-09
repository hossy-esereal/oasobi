import dayjs from 'dayjs';
import 'dayjs/locale/ja';

dayjs.locale('ja');

type Date = dayjs.Dayjs;

export const formatDate = (date: string | Date | undefined, format: string) => {
  return dayjs(date).format(format);
};
