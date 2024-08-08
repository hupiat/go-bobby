import React, { Dispatch, SetStateAction, useTransition } from "react"
import { Button, SafeAreaView, Text, View } from "react-native"
import { WorkflowStep } from "../engine/WorkflowStep";
import MenuLevels from "./MenuLevels";
import CustomButton from "./CustomButton";

interface IProps {
    workflowStep: WorkflowStep;
    setWorkflowStep: Dispatch<SetStateAction<WorkflowStep>>;
}

export default function Menu({ workflowStep, setWorkflowStep }: IProps) {
    const [, startTransition] = useTransition();
    return (
        <SafeAreaView
            style={{
                display: "flex",
                height: '100%',
                width: '100%',
                backgroundColor: 'grey',
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
            {
                workflowStep === "levels_menu" ? 
                    <MenuLevels setWorkflowStep={setWorkflowStep} /> : 
                    <View style={{
                        alignSelf: "center",
                        justifyContent: "space-around",
                        height: "50%"
                    }}>
                        <CustomButton onPress={() => startTransition(() => setWorkflowStep('playing'))}>
                            <Text style = {{ color: "white" }}>Play</Text>
                        </CustomButton>
                        <CustomButton onPress={() => startTransition(() => setWorkflowStep('levels_menu'))}>
                            <Text style = {{ color: "white" }}>Levels</Text>
                        </CustomButton>
                    </View>
            }
      </SafeAreaView>
    )
}