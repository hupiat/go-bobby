import React from 'react';
import { StyleSheet, View } from 'react-native';
import Grid from './components/Grid';

export default function App() {
  return (
    <View style={styles.container}>
      <Grid start={[0, 0]} end={[3, 3]} player={[2, 2]} />
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
