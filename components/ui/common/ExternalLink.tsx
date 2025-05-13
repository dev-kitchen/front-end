import { Href, Link } from "expo-router";
import { openBrowserAsync } from "expo-web-browser";
import { type ComponentProps } from "react";
import { Platform } from "react-native";

type Props = Omit<ComponentProps<typeof Link>, "href"> & {
  href: Href & string;
};

export function ExternalLink({ href, ...rest }: Props) {
  return (
    <Link
      target="_blank"
      {...rest}
      href={href}
      onPress={async (event) => {
        if (Platform.OS !== "web") {
          // Prevent the default behavior of linking to the default browser on native.
          event.preventDefault();
          // Open the link in an in-app browser.
          await openBrowserAsync(href);
        }
      }}
    />
  );
}
//React Native + Expo Router 환경에서 외부 링크를 안전하게 처리하기 위한 하이브리드 링크 컴포넌트
// 사용자의 플랫폼이 웹인지, 모바일 앱인지에 따라 다른 방식으로 외부 링크를 열도록 설계
