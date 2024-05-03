/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, View, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Grid from './graphics/Grid';
import useScreenOrientation from './devices/useScreenOrientation';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  useScreenOrientation();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'grey',
        position: 'absolute',
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
      }}>
      <Grid
        protocol={{
          playerStart: [10, 10],
          removed: [],
          walls: [],
        }}
      />
    </View>
  );
}

export default App;
