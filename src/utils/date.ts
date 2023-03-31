import { isToday, isYesterday, format } from 'date-fns';

export type TOptionsDateFormat = {
  timezone: 'Moscow',
  hour: 'numeric',
  minute: 'numeric',
  timeZoneName: "short",
}

export const getDateFormat = (date: Date) => {
  if (isToday(date)) {
    return 'Сегодня'
  } else if (isYesterday(date)) {
    return 'Вчера'
  } else {
    return format((date), 'MM.dd.yyyy');
  }
}

export const dateFormat = (date: string) => {
  const options: TOptionsDateFormat = {
    timezone: 'Moscow',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: "short",
  }

  return new Date(Date.parse(date)).toLocaleString("ru", options)
}
