import dayjs from 'dayjs';
import { create } from 'zustand';

type CalendarState = {
  selectedDate: string;
  selectDate: (date: string) => void;
};

export const useCalendarStore = create<CalendarState>((set) => ({
  selectedDate: dayjs().format('YYYY-MM-DD'),
  selectDate: (date) => set({ selectedDate: date }),
}));