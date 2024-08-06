import React, { Dispatch, SetStateAction, useTransition } from "react"
import { Button, SafeAreaView } from "react-native";
import { WorkflowStep } from "../engine/WorkflowStep";

interface IProps {
    setWorkflowStep: Dispatch<SetStateAction<WorkflowStep>>;
}

export default function HUD({ setWorkflowStep } : IProps) {
    const [, startTransition] = useTransition();
    return (
        <SafeAreaView style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
        }}>
            <Button title="menu" onPress={() => startTransition(() => setWorkflowStep("menu"))} />    
            <Button title="restart" onPress={() => startTransition(() => setWorkflowStep("restarting"))} />    
        </SafeAreaView>
    );
}