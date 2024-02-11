import React from "react";
import styles from "./styles";
import { View } from "react-native";
import { ImageName } from "../../../../assets";
import { H6 } from "../../../../primitives/Text";
import { Image } from "react-native";

const BiometricFlow: React.FC = () => {
    return (
        <View
            style={{ backgroundColor: '#0000801a', flex: 1.5, flexDirection: 'row' }}>
            <Image style={styles.biometricimg} source={ImageName.biometicImg}></Image>
            <H6 style={styles.biometricText}>Use Biometric</H6>
        </View>
    );
};

export default BiometricFlow;