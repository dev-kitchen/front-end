import { getCurrentWeekDates } from '@/lib/calendar';
import { useCalendarStore } from '@/store/useCalendarStore';
import React from 'react';
import styled from 'styled-components/native';

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
  padding: 0 12px;
`;

const DayWrapper = styled.TouchableOpacity<{ selected: boolean }>`
  align-items: center;
  padding: 8px;
  border-radius: 20px;
  background-color: ${({ selected }) => (selected ? '#333' : 'transparent')};
`;

const DayText = styled.Text<{ selected: boolean }>`
  color: ${({ selected }) => (selected ? '#fff' : '#333')};
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
`;

const WeekDayLabel = styled.Text`
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;
`;

const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export default function WeekCalendar() {
  const weekDates = getCurrentWeekDates();
  const { selectedDate, selectDate } = useCalendarStore();

  return (
    <Row>
      {weekDates.map((day, index) => {
        const isSelected = day.date === selectedDate;
        return (
          <DayWrapper
            key={day.date}
            selected={isSelected}
            onPress={() => selectDate(day.date)}
          >
            <WeekDayLabel>{weekDays[index]}</WeekDayLabel>
            <DayText selected={isSelected}>{day.label}</DayText>
          </DayWrapper>
        );
      })}
    </Row>
  );
}
