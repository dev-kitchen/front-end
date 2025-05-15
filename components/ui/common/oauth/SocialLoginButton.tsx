import React from "react";
import styled from "styled-components/native";

type SocialType = "kakao" | "google";

interface Props {
  type: SocialType;
  onPress: () => void | Promise<void>;
}

const SOCIAL_CONFIG = {
  kakao: {
    backgroundColor: "#FEE300",
    textColor: "#434343",
    icon: require("@/assets/images/kakao_icon.png"),
    label: "카카오로 시작하기",
  },
  google: {
    backgroundColor: "#FFF",
    textColor: "#434343",
    icon: require("@/assets/images/google_icon.png"),
    label: "Google로 시작하기",
  },
};

export const SocialLoginButton = ({ type, onPress }: Props) => {
  const config = SOCIAL_CONFIG[type];

  return (
    <ButtonWrapper
      backgroundColor={config.backgroundColor || "#FFF"}
      onPress={onPress}
    >
      <Icon source={config.icon} resizeMode="contain" />
      <ButtonText textColor={config.textColor}>{config.label}</ButtonText>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.TouchableOpacity<{ backgroundColor: string }>`
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${(props: { backgroundColor: string }) => props.backgroundColor};
  margin-bottom: 12px;
`;

const Icon = styled.Image`
  width: 21px;
  height: 21px;
  margin-right: 12px;
`;

const ButtonText = styled.Text<{ textColor: string }>`
  font-size: 16px;
  color: ${(props: { textColor: string }) => props.textColor};
  font-weight: 500;
`;
