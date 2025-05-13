// app/record.tsx
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const Section = styled.View`
  margin-bottom: 24px;
`;

const Label = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const Input = styled.TextInput`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
`;

const SubmitButton = styled.TouchableOpacity`
  background-color: #333;
  padding: 14px;
  border-radius: 8px;
  align-items: center;
`;

const SubmitText = styled.Text`
  color: white;
  font-weight: bold;
`;

export default function RecordPage() {
  const router = useRouter();

  return (
    <Container>
      <Header>
        <Title>기록하기</Title>
        <MaterialIcons name="close" size={24} onPress={() => router.back()} />
      </Header>

      <Section>
        <Label>오늘 식사는 어땠나요?</Label>
        <Input placeholder="예: 김치찌개, 라면..." />
      </Section>

      <Section>
        <Label>기분을 적어볼까요?</Label>
        <Input placeholder="예: 기분 좋았어요 😄" />
      </Section>

      <SubmitButton onPress={() => console.log('제출')}>
        <SubmitText>기록 저장</SubmitText>
      </SubmitButton>
    </Container>
  );
}
