import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function OAuthRedirect() {
  const router = useRouter();

  useEffect(() => {
      // ✅ 토큰 처리 후 홈 화면으로 이동
      router.replace('/');
    
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#888" />
      <Text style={styles.text}>로그인 중입니다...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    marginTop: 12,
    fontSize: 16,
    color: '#333',
  },
});
