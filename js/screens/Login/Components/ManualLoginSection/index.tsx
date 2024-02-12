import React, { useRef, useState } from "react";
import styles from "./styles";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { ImageName } from "../../../../assets";
import { TextInput } from 'react-native-paper';
import Touchables from "../../../../primitives/TouchableOpacity";
import { H6 } from "../../../../primitives/Text";
import PhoneNumInputText from "../../../../components/PhoneNumInputText";

const ManualSignInFlow: React.FC = ({ navigateToForgetPassword, onFetchDataCallback }) => {
    // MARK: - Properties
    const [userCredential, setUserCredential] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [isPhoneNumber, setIsPhoneNumber] = useState(false)
    const [isSecurePasswordEntry, setIsSecurePasswordEntry] = useState(true)
    let data = {
        contactDetail: "",
        password: "",
    }

    function toggleSecurePassword() {
        setIsSecurePasswordEntry(!isSecurePasswordEntry)
    }

    function tapForgotPassword() {
        navigateToForgetPassword()
    }

    const checkCredentialType = (userCredential: string) => {
        const numberRegex = /^[0-9]+$/;
        return setIsPhoneNumber(numberRegex.test(userCredential));
    };

    const handleCredentialTextChange = (text: string) => {
        //console.log('checxk fucniton')
        setUserCredential(text)
        checkCredentialType(text)
    }

    const sendDataToLogin = (text: {
        contactDetail: string,
        password: string,
    }) => {
        onFetchDataCallback(text)
    }

    return (
        <View
            style={{ flex: 5.5 }}>

            <>
                {isPhoneNumber ? (
                    <PhoneNumInputText
                        onChangeText={(text: string) => {
                            data.contactDetail = text
                            data.password = userPassword
                            sendDataToLogin(data)
                            handleCredentialTextChange(text)
                        }}
                    ></PhoneNumInputText>
                ) : (
                    <TextInput
                        autoCorrect={false}
                        autoFocus={true}
                        onBlur={() => { userPassword }}
                        blurOnSubmit={false}
                        keyboardType='ascii-capable'
                        enterKeyHint='next'
                        style={styles.textInputStyle}
                        outlineColor="#E7EBF3" outlineStyle={{ borderWidth: 1 }}
                        theme={{ roundness: 16 }} activeOutlineColor="#7F879A" mode="outlined"
                        label="Email ID" value={userCredential}
                        onChangeText={text => {
                            data.contactDetail = text
                            data.password = userPassword
                            sendDataToLogin(data)
                            checkCredentialType(text)
                            setUserCredential(text)
                        }}
                    />
                )}
            </>

            <TextInput
                autoCorrect={false}
                keyboardType='ascii-capable'
                enterKeyHint='done'
                style={styles.textInputStyle} outlineColor="#E7EBF3" outlineStyle={{ borderWidth: 1 }}
                theme={{ roundness: 16 }} activeOutlineColor="#7F879A" mode="outlined"
                secureTextEntry={isSecurePasswordEntry}
                right={<TextInput.Icon color="#000080" style={{ top: 5 }} icon={ImageName.togglePassword} onPress={toggleSecurePassword} />}
                label="Password" value={userPassword}
                onChangeText={
                    (password) => {
                        data.contactDetail = userCredential
                        data.password = password
                        sendDataToLogin(data)
                        setUserPassword(password)
                    }}
            />
            <Touchables
                titleStyle={styles.forgotTapStyle}
                onPress={tapForgotPassword}
                {...styles.forgotTouchable}
                title="Forgot Password ?">
            </Touchables>
        </View>
    );
};

export default ManualSignInFlow;



// send the updated credential to the component