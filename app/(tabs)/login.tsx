// app/record.tsx
import { SocialLoginButton } from "@/components/ui/common/oauth/SocialLoginButton";
import { parseQueryParams } from "@/lib/auth";
import { useUserStore } from "@/store/userStore";
import * as AuthSession from "expo-auth-session";
import Constants from "expo-constants";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import styled from "styled-components/native";

export const API_BASE_URL = Constants.expoConfig?.extra?.API_URL;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

export default function LoginPage() {
  const { setAccessToken, setRefreshToken } = useUserStore.getState();

  const handleAuthUrl = async (type: "google" | "kakao") => {
    const authUrl = {
      google: `${API_BASE_URL}/auth/oauth2/google`,
      kakao: `${API_BASE_URL}/auth/oauth2/kakao`,
    };

    const result = await WebBrowser.openAuthSessionAsync(
      authUrl[type],
      AuthSession.makeRedirectUri(),
      { showInRecents: true }
    );

    if (result.type === "success" && result.url) {
      const { accessToken, refreshToken } = parseQueryParams(result.url);

      if (accessToken && refreshToken) {
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        console.log("토큰 저장 완료", accessToken, refreshToken);

      } else {
        console.warn("토큰 파싱 실패");
      }
    }
  };

  return (
    <Container>
      <SocialLoginButton type="kakao" onPress={() => handleAuthUrl("kakao")} />
      <SocialLoginButton type="google" onPress={() => handleAuthUrl("google")} />
    </Container>
  );
}