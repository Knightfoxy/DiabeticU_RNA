import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import { ImageName } from "../../assets";

function CheckmarkWithLabel({ item }) {
    return (
        <View style={styles.rootContainer}>
            <Image source={ImageName.checkmarkGreen} style={styles.imageContainer}></Image>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );
}
export default CheckmarkWithLabel;