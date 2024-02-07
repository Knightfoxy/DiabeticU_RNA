import React from "react";
import { useEffect } from "react";
import { Image, ImageBackground, Text } from "react-native";
import { ImageName } from "../../assets";
import RNSplashScreen from 'react-native-splash-screen';
import styles from "./styles";
import { ScreenNames } from "../../navigators/screenNames";

function SplashScreen({ navigation }) {
console.log('Rendering Splash Screen.')
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(ScreenNames.Landing)
        }, 2000)
    })
    return (
        <ImageBackground source={ImageName.splashBg} style = {styles.container}>
            <Image
                style={styles.image}
                source={ImageName.splashImg} />
        </ImageBackground>
    );
};

export default SplashScreen;