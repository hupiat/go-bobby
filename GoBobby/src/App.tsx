/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useLayoutEffect, useState} from 'react';

import useScreenOrientation from './devices/useScreenOrientation';
import {WorkflowStep} from './engine/WorkflowStep';
import Grid from './graphics/Grid';
import { LEVELS } from './engine/IGridProtocol';
import Menu from './graphics/Menu';
import { StatusBar } from 'react-native';
import HUD from './graphics/HUD';
import { getStorageKey } from './devices/utils';

const MAX_LEVEL_KEY = getStorageKey("levelMax");

function App(): React.JSX.Element {
  const levelStored = 0 // localStorage.getItem(MAX_LEVEL_KEY);

  const [playerLevel, setPlayerLevel] = useState<number>(levelStored ? Number(levelStored) : 0);
  const [playerStep, setPlayerStep] = useState<WorkflowStep>('menu');

  // Need to keep this to lock screen orientation internally
  useScreenOrientation();

  useLayoutEffect(() => {
    switch (playerStep) {
      case "restarting": // TODO
        break;
      case "won":
        setPlayerLevel (playerLevel => {
          if (levelStored && Number(levelStored) < playerLevel + 1) {
           // localStorage.setItem(MAX_LEVEL_KEY, String(playerLevel + 1));
          }
          return playerLevel + 1;
        });
        break;
    }
  }, [playerStep]);

  return playerStep === 'menu' ? (
      <Menu setWorkflowStep={setPlayerStep} />
    ) : (
      <>
        <StatusBar hidden /> 
        <HUD setWorkflowStep={setPlayerStep} level={playerLevel + 1} />
        <Grid
          protocol={LEVELS[playerLevel]}
          setWorkflowStep={setPlayerStep}
        />
      </>
    );
  }

export default App;
