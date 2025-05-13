import { MaterialIcons } from "@expo/vector-icons";
import React, { ReactNode } from "react";
import styled from "styled-components/native";

type CalendarCardProps = {
  children?: ReactNode;
};

const Container = styled.View`
  background-color: #fffaf4;
  border-radius: 12px;
  padding: 16px;
  margin: 16px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 3;
  width:300px;
  height: 300px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const ProfileWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 84px;
  height: 27px;
  margin-right: 8px;
`;

const GreetingText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export default function CalendarCard({ children }: CalendarCardProps) {
  return (
    <Container>
      <Header>
        <ProfileWrapper>
          <Avatar source={require("@/assets/images/calendar-avatar.png")} />
          <GreetingText>재연아,{"\n"}오늘 밥 먹었어?</GreetingText>
        </ProfileWrapper>
        <MaterialIcons name="calendar-today" size={24} color="#333" />
      </Header>
      {children}
    </Container>
  );
}
