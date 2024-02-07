import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TouchableImage from "../../primitives/ImageTouchables";
import { ImageName } from "../../assets";
import styles from "./styles";
import { H1, H6, H5 } from "../../primitives/Text";
import metrics from "../../themes/metrics";

function InitiateForgotPassword({ navigation }) {

    return (

        <View style={styles.container}>
            <View style={{ flex: 0.8, marginTop: 30, justifyContent: 'flex-end' }}>
                <TouchableImage
                    {...styles.backTouchable}
                    onPress={() => { navigation.goBack() }}
                    imageSource={ImageName.backChevron}
                    imageStyle={styles.backImageStyle}></TouchableImage>
            </View>

            <View style={{ flex: 2, justifyContent: 'center' }}>
                <H1 style={{ marginLeft: 30 }}>Forgot Password</H1>
                <H6 style={styles.descriptionText}>Please select your reset mechanism to recover your password</H6>
            </View>

            <View style={{ flex: 6 }}>
                <View style={{ flex: 0.45, flexDirection: 'row' }}>
                    <TouchableOpacity style={[styles.credTypeTouchableBg, { marginLeft: 30, marginRight: 16 }]}>
                        <Image style={styles.credTypeImg} source={ImageName.emailPostImg}></Image>
                        <H6 style={styles.credsHeading}> Use Email ID</H6>
                        <H6 style={[styles.descriptionText, { marginLeft: 16 }]}>Send OTP to your email to reset your password</H6>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.credTypeTouchableBg, { marginRight: 30 }]}>
                        <Image style={styles.credTypeImg} source={ImageName.phoneNumPostimg}></Image>
                        <H6 style={styles.credsHeading}> Use Phone Number</H6>
                        <H6 style={[styles.descriptionText, { marginLeft: 16 }]}>Send OTP code to registered number to reset your password</H6>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default InitiateForgotPassword;