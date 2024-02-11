import React from "react";
import { View } from "react-native";
import TouchableImage from "../../../primitives/ImageTouchables";
import { ImageName } from "../../../assets";
import styles from "./styles";
import { H1, H6, H5 } from "../../../primitives/Text";
import { TextInput } from "react-native-paper";
import Touchables from "../../../primitives/TouchableOpacity";

function ResetPasswordOtpStep({ navigation }) {

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
                <H6 style={styles.descriptionText}>Please enter the credentials of the account you want to reset the password for</H6>
            </View>

            <View style={{ flex: 6 }}>
                <TextInput
                    style={styles.textInputStyle}
                    outlineColor="#E7EBF3" outlineStyle={{ borderWidth: 1 }}
                    theme={{ roundness: 16, colors: { text: 'black' } }} activeOutlineColor="#7F879A" mode="outlined"
                    label="Email ID"
                />
                <Touchables
                    {...styles.loginTouchable}
                    titleStyle={styles.loginTouchableTitle}
                    title='Verify'></Touchables>
            </View>
        </View>
    );
};

export default ResetPasswordOtpStep;