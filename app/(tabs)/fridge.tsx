import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function FridgeWebView() {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://example.com' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
