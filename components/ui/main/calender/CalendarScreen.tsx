import React from 'react';
import styled from 'styled-components/native';
import Calendar from './Calender';


const ScreenContainer = styled.SafeAreaView`
  flex: 1;
  height: 400px;
  background-color: #f8f8f8;
`;

export default function CalendarScreen() {
  return (
    <ScreenContainer>
      <Calendar />
    </ScreenContainer>
  );
}
