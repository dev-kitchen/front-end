import React from 'react';
import styled from 'styled-components/native';
import CalendarPanel from './Calender';


const ScreenContainer = styled.SafeAreaView`
  flex: 1;
  height: 400px;
  background-color: #f8f8f8;
`;

export default function CalendarScreen() {
  return (
    <ScreenContainer>
      <CalendarPanel />
    </ScreenContainer>
  );
}
