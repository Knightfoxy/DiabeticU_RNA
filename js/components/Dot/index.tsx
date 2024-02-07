import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";


function Dot({ data, isSelected }) {
    console.log(data.title, isSelected)
    return (
        <View style={[styles.rootContainer, { backgroundColor: isSelected ? "#FF00A6" : "#CAD0EA" }]}>   
        </View>  
    );
}
export default Dot;