import React, { useState } from "react";
import { View } from "react-native";
import { ImageName } from "../../../assets";
import styles from "./styles";
import TopBackButton from "../../../components/BackButton";
import TopHeadingWithDesc from "../../../components/TopHeadingWithDesc";
import Touchables from "../../../primitives/TouchableOpacity";
import { TextInput } from "react-native-paper";
import PasswordValidatorView from "../../../components/PasswordValidationView";

function SetPasswordForgotFlow({ navigation }) {

    const [userPassword, setUserPassword] = useState('')
    const [isSecurePasswordEntry, setIsSecurePasswordEntry] = useState(true)

    function didTapBack() {
        navigation.goBack()
    }

    function toggleSecurePassword() {
        setIsSecurePasswordEntry(!isSecurePasswordEntry)
    }

    return (

        <View style={styles.container}>
            <TopBackButton tapBack={didTapBack}></TopBackButton>
            <TopHeadingWithDesc heading={'Reset Password'} description={'Please enter your new password that you want to continue with'}></TopHeadingWithDesc>

            <View style={{ flex: 13 }}>
                <TextInput
                    autoCorrect={false}
                    keyboardType='ascii-capable'
                    enterKeyHint='done'
                    style={styles.textInputStyle} outlineColor="#E7EBF3" outlineStyle={{ borderWidth: 1 }}
                    theme={{ roundness: 16 }} activeOutlineColor="#7F879A" mode="outlined"
                    secureTextEntry={isSecurePasswordEntry}
                    right={<TextInput.Icon color="#000080" style={{ top: 5 }} icon={ImageName.togglePassword} onPress={toggleSecurePassword} />}
                    label="New Password" value={userPassword}
                    onChangeText={text => {
                        setUserPassword(text)
                    }}
                />
                <PasswordValidatorView/>
                <Touchables
                    {...styles.loginTouchable}
                    titleStyle={styles.loginTouchableTitle}
                    title='Reset Password'></Touchables>
            </View>
        </View>
    );
};

export default SetPasswordForgotFlow;