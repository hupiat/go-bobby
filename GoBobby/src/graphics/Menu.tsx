import React, { Dispatch, SetStateAction } from "react"
import { Button, SafeAreaView } from "react-native"
import { WorkflowStep } from "../engine/WorkflowStep";

interface IProps {
    setWorkflowStep: Dispatch<SetStateAction<WorkflowStep>>;
}

export default function Menu({ setWorkflowStep }: IProps) {

    return (
        <SafeAreaView
            style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'grey',
            flexDirection: 'column',
            justifyContent: 'center',
            }}>
            <Button title="Play" onPress={() => setWorkflowStep('playing')} />
      </SafeAreaView>
    )
}