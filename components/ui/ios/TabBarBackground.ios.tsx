import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';

export default function BlurTabBarBackground() {
  return (
    <BlurView
      // System chrome material automatically adapts to the system's theme
      // and matches the native tab bar appearance on iOS.
      tint="systemChromeMaterial"
      intensity={100}
      style={StyleSheet.absoluteFill}
    />
  );
}

export function useBottomTabOverflow() {
  return useBottomTabBarHeight();
}

// 하단 탭 바에 iOS 스타일의 반투명 블러 배경 효과를 주고, 동시에 탭 바 높이를 반환하는 훅을 제공합니다.

// 즉, 아래는 iOS 전용 BottomTabBar 배경 및 안전 영역 계산용 모듈입니다.