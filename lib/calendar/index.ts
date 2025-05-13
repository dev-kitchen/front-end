import dayjs from 'dayjs';

export const getCurrentWeekDates = (): { date: string; label: string }[] => {
  const startOfWeek = dayjs().startOf('week');
  return Array.from({ length: 7 }, (_, i) => {
    const date = startOfWeek.add(i, 'day');
    return {
      date: date.format('YYYY-MM-DD'),
      label: date.format('D'),
    };
  });
};
