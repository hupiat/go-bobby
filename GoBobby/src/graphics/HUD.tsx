import React, { Dispatch, SetStateAction, useTransition } from "react"
import { Button, SafeAreaView, Text } from "react-native";
import { WorkflowStep } from "../engine/WorkflowStep";

interface IProps {
    level: number;
    setWorkflowStep: Dispatch<SetStateAction<WorkflowStep>>;
}

export default function HUD({ setWorkflowStep, level } : IProps) {
    const [, startTransition] = useTransition();
    return (
        <SafeAreaView style={{
            display: "flex",
            backgroundColor: "grey",
            flexDirection: "row",
            justifyContent: "space-around",
            height: "50%"
        }}>
            <Button title="menu" onPress={() => startTransition(() => setWorkflowStep("menu"))} />    
            <Button title="restart" onPress={() => startTransition(() => setWorkflowStep("restarting"))} />  
            <Button title={"Level : " + level} onPress={() => startTransition(() => setWorkflowStep("levels_menu"))} />  
        </SafeAreaView>
    );
}