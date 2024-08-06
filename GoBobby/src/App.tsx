/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {Button, SafeAreaView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import useScreenOrientation from './devices/useScreenOrientation';
import {WorkflowStep} from './engine/WorkflowStep';
import Grid from './graphics/Grid';

function App(): React.JSX.Element {
  const [playerStep, setPlayerStep] = useState<WorkflowStep>('menu');
  const isDarkMode = useColorScheme() === 'dark';
  useScreenOrientation();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return playerStep === 'menu' ? (
    <SafeAreaView
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'grey',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <Button title="Play" onPress={() => setPlayerStep('playing')} />
    </SafeAreaView>
  ) : (
    <Grid
      protocol={{
        playerStart: [10, 10],
        removed: [],
        walls: [],
        exit: [15, 10],
      }}
      setWorkflowStep={setPlayerStep}
    />
  );
}

export default App;
