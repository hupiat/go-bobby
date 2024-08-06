import React, { Dispatch, SetStateAction } from "react"
import { Button } from "react-native";
import { WorkflowStep } from "../engine/WorkflowStep";

interface IProps {
    setWorkflowStep: Dispatch<SetStateAction<WorkflowStep>>;
}

export default function HUD({ setWorkflowStep } : IProps) {

    return (
        <>
            <Button title="restart" onPress={() => setWorkflowStep("restarting")} />    
        </>
    );
}