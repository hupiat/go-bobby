import React, { Dispatch, SetStateAction } from "react";
import HUD from "./HUD";
import { WorkflowStep } from "../engine/WorkflowStep";
import { Button, FlatList } from "react-native";

interface IProps {
    numberOfLevels: number;
    setWorkflowStep: Dispatch<SetStateAction<WorkflowStep>>;
    setPlayerLevel: Dispatch<SetStateAction<number>>;
}

export default function MenuLevels({ setWorkflowStep, setPlayerLevel, numberOfLevels }: IProps) {
    const buttonsData = []

    for (let i = 0; i < numberOfLevels; i++) {
        buttonsData.push({
            id: i,
            title: i
        })
    }

    return (
        <>
            <HUD setWorkflowStep={setWorkflowStep} />
            <FlatList data={buttonsData} renderItem={item => <Button title={String(item.index + 1)} onPress={() => {
                setWorkflowStep("playing");
                setPlayerLevel(item.index);
            }} />} keyExtractor={item =>String(item.id)} />
        </>
    );
}