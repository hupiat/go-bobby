/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useLayoutEffect, useState} from 'react';

import useScreenOrientation from './devices/useScreenOrientation';
import {WorkflowStep} from './engine/WorkflowStep';
import Grid from './graphics/Grid';
import { IGridProtocol, LEVELS } from './engine/IGridProtocol';
import Menu from './graphics/Menu';
import { StatusBar } from 'react-native';
import HUD from './graphics/HUD';

function App(): React.JSX.Element {
  const [playerLevel, setPlayerLevel] = useState<number>(0);
  const [playerStep, setPlayerStep] = useState<WorkflowStep>('menu');

  // Need to keep this to lock screen orientation internally
  useScreenOrientation();

  useLayoutEffect(() => {
    switch (playerStep) {
      case "restarting": // TODO
      case "won":
        setPlayerLevel (playerLevel => playerLevel + 1);
    }
  }, [playerStep]);

  return playerStep === 'menu' ? (
      <Menu setWorkflowStep={setPlayerStep} />
    ) : (
      <>
        <StatusBar hidden /> 
        <HUD setWorkflowStep={setPlayerStep} />
        <Grid
          protocol={LEVELS[playerLevel]}
          setWorkflowStep={setPlayerStep}
        />
      </>
    );
  }

export default App;
