import React, { Dispatch, SetStateAction, useTransition } from "react"
import { SafeAreaView, Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign"
import { WorkflowStep } from "../engine/WorkflowStep";
import CustomButton from "./CustomButton";

interface IProps {
    level?: number;
    workflowStep: WorkflowStep;
    setWorkflowStep: Dispatch<SetStateAction<WorkflowStep>>;
}

const ICON_SIZE = 20;
const ICON_COLOR = "white";

export default function HUD({ workflowStep, setWorkflowStep, level } : IProps) {
    const [, startTransition] = useTransition();
    return (
        <SafeAreaView style={{
            display: "flex",
            backgroundColor: "grey",
            flexDirection: "row",
            justifyContent: "space-around",
            height: "100%"
        }}>
            <CustomButton onPress={() => startTransition(() => setWorkflowStep("menu"))}>
                <Icon name="menufold" size={ICON_SIZE} color={ICON_COLOR}/>
            </CustomButton>    
            {
                level !== undefined && 
                    <>
                        <CustomButton onPress={() => startTransition(() => setWorkflowStep("restarting"))}>
                            <Icon name="retweet" size={ICON_SIZE} color={ICON_COLOR}/>
                        </CustomButton>    
                        {
                            workflowStep !== "playing_generative_model" && 
                            <CustomButton onPress={() => startTransition(() => setWorkflowStep("levels_menu"))}>
                                <Icon name="profile" size={ICON_SIZE} color={ICON_COLOR}/>
                                <Text style={{
                                    color: ICON_COLOR,
                                    marginLeft: 10
                                }}>{level}</Text>
                            </CustomButton>  
                        }
                    </>
            }
        </SafeAreaView> 
    );
}
