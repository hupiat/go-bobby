/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useLayoutEffect, useState} from 'react';

import useScreenOrientation from './devices/useScreenOrientation';
import {WorkflowStep} from './engine/WorkflowStep';
import Grid from './graphics/Grid';
import Menu from './graphics/Menu';
import { ActivityIndicator, SafeAreaView, StatusBar } from 'react-native';
import HUD from './graphics/HUD';
import { getStorageKey } from './devices/utils';
import * as LEVELS from '../50_logical_levels.json';

const SIZE_LEVELS_JSON = 50;
const MAX_LEVEL_KEY = getStorageKey("levelMax");

function App(): React.JSX.Element {
  const levelStored = 0 // localStorage.getItem(MAX_LEVEL_KEY);

  const [playerLevel, setPlayerLevel] = useState<number>(levelStored ? Number(levelStored) : 0);
  const [playerStep, setPlayerStep] = useState<WorkflowStep>('menu');

  // Need to keep this to lock screen orientation internally
  useScreenOrientation();

  useLayoutEffect(() => {
    switch (playerStep) {
      case "restarting":
        setTimeout(() => setPlayerStep("playing"), 500);
        break;
      case "won":
        setPlayerLevel (playerLevel => {
          if (levelStored && Number(levelStored) < playerLevel + 1) {
           // localStorage.setItem(MAX_LEVEL_KEY, String(playerLevel + 1));
          }
          return playerLevel + 1;
        })
        setPlayerStep("playing");
        break;
    }
  }, [playerStep]);

  return playerStep === 'menu' || playerStep === "levels_menu" ? (
      <Menu setWorkflowStep={setPlayerStep} workflowStep={playerStep} setPlayerLevel={setPlayerLevel} numberOfLevels={SIZE_LEVELS_JSON} />
    ) : (
      playerStep === "restarting" ? 
        <SafeAreaView style={{
          backgroundColor: "grey",
          height: "100%"
        }}>
          <ActivityIndicator size={"large"} style={{
            marginTop: "20%"
          }} color={"blue"} />
        </SafeAreaView> : 
      <>
        <StatusBar hidden /> 
        <HUD setWorkflowStep={setPlayerStep} level={playerLevel + 1} />
        <Grid
          protocol={(LEVELS as [])[playerLevel]}
          workflowStep={playerStep}
          setWorkflowStep={setPlayerStep}
        />
      </>
    );
  }

export default App;
