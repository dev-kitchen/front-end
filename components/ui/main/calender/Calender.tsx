import React from "react";
import styled from "styled-components/native";
import CalendarCard from "./CalendardCard";
import WeekCalendar from "./WeekCalender";

const WebCalendarContainer = styled.View`
  flex: 1;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
`;

export default function CalendarPanel() {

  return (
    <WebCalendarContainer>
      <CalendarCard>
        <WeekCalendar/>
      </CalendarCard>
    </WebCalendarContainer>
  );
}
