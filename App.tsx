import React from 'react';
import { StyleSheet, View } from 'react-native';
import L1 from './components/levels/L1';

export default function App() {
  return (
    <View style={styles.container}>
      <L1 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#303952',
  },
});
