import React, { Dispatch, SetStateAction, useTransition } from "react"
import { SafeAreaView, Text, View } from "react-native"
import { WorkflowStep } from "../engine/WorkflowStep";
import MenuLevels from "./MenuLevels";
import CustomButton from "./CustomButton";

interface IProps {
    numberOfLevels: number;
    workflowStep: WorkflowStep;
    setWorkflowStep: Dispatch<SetStateAction<WorkflowStep>>;
    setPlayerLevel: Dispatch<SetStateAction<number>>;
}

export default function Menu({ workflowStep, setWorkflowStep, setPlayerLevel, numberOfLevels }: IProps) {
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
                    <MenuLevels setWorkflowStep={setWorkflowStep} setPlayerLevel={setPlayerLevel} numberOfLevels={numberOfLevels} /> : 
                    <View style={{
                        display: "flex",
                        flexDirection: "column",
                        alignSelf: "center",
                        justifyContent: "space-around",
                        height: "70%"
                    }}>
                        <Text style={{
                            fontSize: 30,
                            color: "white"
                        }}>Go Bobby !</Text>
                        <CustomButton onPress={() => startTransition(() => setWorkflowStep('playing'))}>
                            <Text style = {{ color: "white", margin: 10  }}>Play</Text>
                        </CustomButton>
                        <CustomButton onPress={() => startTransition(() => setWorkflowStep('levels_menu'))}>
                            <Text style = {{ color: "white", margin: 10 }}>Levels</Text>
                        </CustomButton>
                    </View>
            }
      </SafeAreaView>
    )
}