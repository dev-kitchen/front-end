import ParallaxScrollView from "@/components/ui/common/ParallaxScrollView";
import CalendarScreen from "@/components/ui/main/calender/CalendarScreen";
import { api } from "@/lib/api/api";
import { parseQueryParams } from "@/lib/auth";
import { useUserStore } from "@/store/userStore";
import * as AuthSession from "expo-auth-session";
import Constants from "expo-constants";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { Button, Image, StyleSheet } from "react-native";

export const API_BASE_URL = Constants.expoConfig?.extra?.API_URL;

export default function HomeScreen() {
  const { setAccessToken, setRefreshToken } = useUserStore.getState();

  // 추후 refreshtoken 인증후 accesstoken 새로 발급받는 로직 짜야됨

  const handleLogin = async () => {
    const authUrl = `${API_BASE_URL}/auth/oauth2/google`;

    const result = await WebBrowser.openAuthSessionAsync(
      authUrl,
      AuthSession.makeRedirectUri(),
      {
        showInRecents: true,
      }
    );

    if (result.type === "success" && result.url) {
      const { accessToken, refreshToken } = parseQueryParams(result.url);

      if (accessToken && refreshToken) {
        setAccessToken(accessToken);
        await setRefreshToken(refreshToken);
        console.log("로그인 완료! 토큰 저장됨");
          fetchUserData();
      } else {
        console.warn("URL에서 토큰 추출 실패", result.url);
      }
    } else {
      console.log("로그인 취소 또는 실패");
    }
  };
  async function fetchUserData() {
    try {
      const response = await api.get("/recipes/health ");
      console.log("User data:", response.data);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      throw error;
    }
  }


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <CalendarScreen></CalendarScreen>
      <Button title="구글 로그인" onPress={handleLogin} />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
