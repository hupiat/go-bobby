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
import { IGridProtocol, WallProtocol } from './engine/IGridProtocol';
import useGenerativeModel from './engine/useGenerativeModel';

const SIZE_LEVELS_JSON = 50;
const MAX_LEVEL_KEY = getStorageKey("levelMax");

function App(): React.JSX.Element {
  const levelStored = 0

  const [generativeModel, setGenerativeModel] = useState<IGridProtocol | null>(null);
  const [playerLevel, setPlayerLevel] = useState<number>(levelStored ? Number(levelStored) : 0);
  const [playerStep, setPlayerStep] = useState<WorkflowStep>('menu');

  // Need to keep this to lock screen orientation internally
  useScreenOrientation();

  const { loadGenerativeModel } = useGenerativeModel();

  useLayoutEffect(() => {
    switch (playerStep) {
      case "loading_generative_model":
        loadGenerativeModel().then(model => {
          setGenerativeModel(model);
          setPlayerStep("playing_generative_model");
        }).catch(console.error);
        break;
      case "restarting":
        setTimeout(() => setPlayerStep("playing"), 500);
        break;
      case "won":
        setPlayerLevel (playerLevel => {
          if (levelStored && Number(levelStored) < playerLevel + 1) {
            // TODO : firebase
          }
          return playerLevel + 1;
        })
        setPlayerStep("playing");
        break;
    }
  }, [playerStep]);

  return (
    <>
      <StatusBar hidden />
      {
          playerStep === 'menu' || playerStep === "levels_menu" ? (
            <Menu setWorkflowStep={setPlayerStep} workflowStep={playerStep} setPlayerLevel={setPlayerLevel} numberOfLevels={SIZE_LEVELS_JSON} />
          ) : (
            playerStep === "restarting" || playerStep === "loading_generative_model" ? 
              <SafeAreaView style={{
                backgroundColor: "grey",
                height: "100%"
              }}>
                <ActivityIndicator size={"large"} style={{
                  marginTop: "20%"
                }} color={"primary"} />
              </SafeAreaView> : 
            <>
              <HUD workflowStep={playerStep} setWorkflowStep={setPlayerStep} level={playerLevel + 1} />
              <Grid
                protocol={playerStep === "playing_generative_model" ? generativeModel! : (LEVELS as [])[playerLevel]}
                workflowStep={playerStep}
                setWorkflowStep={setPlayerStep}
              />
            </>
          )
      } 
    </>
  );
}

export default App;
