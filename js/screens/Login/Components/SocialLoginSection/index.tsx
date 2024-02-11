import React from "react";
import styles from "./styles";
import { View } from "react-native";
import { ImageName } from "../../../../assets";
import { H6 } from "../../../../primitives/Text";
import LinearGradient from "react-native-linear-gradient";
import TouchableImage from "../../../../primitives/ImageTouchables";

const SocialSignInFlow: React.FC = () => {

    return (
        <View
            style={{ flex: 2.5, marginBottom: 10 }}>
            <View style={styles.touchableSeperatorBg}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#FFFFFF', '#E5EBF5']} style={{ height: 2, width: 100, marginRight: 10 }} />
                <H6 style={{ color: '#7F879A' }}>or continue with</H6>
                <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} colors={['#FFFFFF', '#E5EBF5']} style={{ height: 2, width: 100, marginLeft: 10 }} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 30 }} >
                <TouchableImage {...styles.socialTouchables} imageSource={ImageName.googleIcon} imageStyle={styles.socialIcons}></TouchableImage>
                <TouchableImage {...styles.socialTouchables} imageSource={ImageName.fbCircular} imageStyle={styles.socialIcons}></TouchableImage>
                <TouchableImage {...styles.socialTouchables} imageSource={ImageName.appleIcon} imageStyle={styles.socialIcons}></TouchableImage>
            </View>
        </View>
    );
};

export default SocialSignInFlow;