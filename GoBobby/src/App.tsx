/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import useScreenOrientation from './devices/useScreenOrientation';
import {WorkflowStep} from './engine/WorkflowStep';
import Grid from './graphics/Grid';
import { LEVELS } from './engine/IGridProtocol';
import Menu from './graphics/Menu';
import { StatusBar } from 'react-native';
import HUD from './graphics/HUD';

function App(): React.JSX.Element {
  const [playerStep, setPlayerStep] = useState<WorkflowStep>('menu');

  // Need to keep this to lock screen orientation internally
  useScreenOrientation();

  return playerStep === 'menu' ? (
      <Menu setWorkflowStep={setPlayerStep} />
    ) : (
      <>
        <StatusBar hidden /> 
        <HUD setWorkflowStep={setPlayerStep} />
        <Grid
          protocol={LEVELS[0]}
          setWorkflowStep={setPlayerStep}
        />
      </>
    );
  }

export default App;
