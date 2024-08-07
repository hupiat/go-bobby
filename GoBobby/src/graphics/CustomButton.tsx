import React, { PropsWithChildren } from "react";
import { TouchableHighlight, View } from "react-native";

interface IProps {
    onPress: () => void;
}

export default function CustomButton({ onPress, children }: PropsWithChildren<IProps>) {

    return (
       <TouchableHighlight onPress={onPress} >
        <View style={{
            backgroundColor: "#1E88E5",
            padding: "5%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            margin: 5,
            borderRadius: 50
        }}> 
            {children}
        </View>
       </TouchableHighlight> 
    )
}