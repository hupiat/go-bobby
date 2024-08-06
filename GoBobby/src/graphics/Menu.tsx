import React, { Dispatch, SetStateAction, useTransition } from "react"
import { Button, SafeAreaView } from "react-native"
import { WorkflowStep } from "../engine/WorkflowStep";

interface IProps {
    setWorkflowStep: Dispatch<SetStateAction<WorkflowStep>>;
}

export default function Menu({ setWorkflowStep }: IProps) {
    const [, startTransition] = useTransition();
    return (
        <SafeAreaView
            style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'grey',
            flexDirection: 'column',
            justifyContent: 'center',
            }}>
            <Button title="Play" onPress={() => startTransition(() => setWorkflowStep('playing'))} />
      </SafeAreaView>
    )
}