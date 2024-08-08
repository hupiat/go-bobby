import React, { Dispatch, SetStateAction } from "react";
import HUD from "./HUD";
import { WorkflowStep } from "../engine/WorkflowStep";
import { LEVELS } from "../engine/IGridProtocol";
import { Button, FlatList } from "react-native";

interface IProps {
    setWorkflowStep: Dispatch<SetStateAction<WorkflowStep>>;
}

export default function MenuLevels({ setWorkflowStep }: IProps) {
    const buttonsData = []

    for (let i = 0; i < LEVELS.length; i++) {
        buttonsData.push({
            id: i,
            title: i
        })
    }

    return (
        <>
        <HUD setWorkflowStep={setWorkflowStep} />
        <FlatList data={buttonsData} renderItem={item => <Button title={String(item.index)} onPress={() => {
            setWorkflowStep("playing");
        }} />} keyExtractor={item =>String(item.id)} />
        </>
    );
}