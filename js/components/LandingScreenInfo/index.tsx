import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import { ImageName } from "../../assets";


function LandingPgInfoScroll({ item }) {
    return (
        <View style={styles.rootContainer}>
            <Image source={item.image} style={styles.imageContainer}></Image>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.descriptionText}>{item.description}</Text>
            </View>
        </View>
    );
}
export default LandingPgInfoScroll;