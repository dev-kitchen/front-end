import { SymbolView, SymbolViewProps, SymbolWeight } from 'expo-symbols';
import { StyleProp, ViewStyle } from 'react-native';

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight = 'regular',
}: {
  name: SymbolViewProps['name'];
  size?: number;
  color: string;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  return (
    <SymbolView
      weight={weight}
      tintColor={color}
      resizeMode="scaleAspectFit"
      name={name}
      style={[
        {
          width: size,
          height: size,
        },
        style,
      ]}
    />
  );
}
//  iOS에서 사용할 수 있는 SF Symbols 기반 아이콘 컴포넌트입니다.
// Expo의 expo-symbols를 사용해서, iOS 전용 SymbolView를 간편하게 활용할 수 있도록 IconSymbol이라는 래퍼 컴포넌트