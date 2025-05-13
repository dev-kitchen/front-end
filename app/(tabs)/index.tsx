import ParallaxScrollView from "@/components/ui/common/ParallaxScrollView";
import * as AuthSession from "expo-auth-session";
import Constants from "expo-constants";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
import { useEffect } from "react";
import { Button, Image, Linking, StyleSheet } from "react-native";

export const API_BASE_URL = Constants.expoConfig?.extra?.API_URL;

export default function HomeScreen() {
  const handleLogin = async () => {
    const authUrl = `${API_BASE_URL}auth/oauth2/google`;

    const result = await WebBrowser.openAuthSessionAsync(
      authUrl,
      AuthSession.makeRedirectUri(),
      {
        showInRecents: true,
      }
    );

    if (result.type === "success") {
      console.log("로그인 완료!", result.url);
      // result.url → 리디렉션된 URL
      // 여기에 토큰 처리 등 추가 로직
    } else {
      console.log("로그인 취소 또는 실패");
    }
  };

  useEffect(() => {
    // URL이 변경될 때 처리
    const handleUrl = (url: string) => {
      if (url.includes("devKitchen://oauthredirect")) {
        // URL에서 파라미터 추출
        const params = new URLSearchParams(url.split("?")[1]);
        const accessToken = params.get("access_token");
        const refreshToken = params.get("refresh_token");

        // 받은 토큰을 처리합니다.
        console.log("Access Token:", accessToken);
        console.log("Refresh Token:", refreshToken);
      }
    };

    // 이벤트 리스너 추가
    const subscription = Linking.addEventListener("url", (event) =>
      handleUrl(event.url)
    );

    // 앱이 백그라운드에서 열렸을 때 URL 처리
    Linking.getInitialURL().then((url) => {
      if (url) handleUrl(url);
    });

    return () => {
      // 이벤트 리스너 제거
      subscription.remove();
    };
  }, []);
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
