import React, { useState } from "react";
import { Image, ScrollView, View } from "react-native";
import { ImageName } from "../../assets";
import styles from "./styles";
import TopBackButton from "../../components/BackButton";
import TopHeadingWithDesc from "../../components/TopHeadingWithDesc";
import Touchables from "../../primitives/TouchableOpacity";
import { TextInput } from "react-native-paper";
import PasswordValidatorView from "../../components/PasswordValidationView";
import PhoneNumTextField from "../../components/PhoneNumInputText";
import { ScreenNames } from "../../navigators/screenNames";
import CredentialTypes from "../ForgotPasswordFlow/ForgotPassword/credentialTypes";
import { H6 } from "../../primitives/Text";
import TouchableImage from "../../primitives/ImageTouchables";

function SignUpPersonalInfo({ navigation }) {

    const [userPassword, setUserPassword] = useState('')
    const [userPhoneNumber, setUserPhoneNumber] = useState('')
    const [isSecurePasswordEntry, setIsSecurePasswordEntry] = useState(true)
    const [isCheckboxTicked, setIsCheckboxTicked] = useState(false)

    function didTapBack() {
        navigation.goBack()
    }

    function toggleSecurePassword() {
        setIsSecurePasswordEntry(!isSecurePasswordEntry)
    }

    function toggleCheckboxTicked() {
        setIsCheckboxTicked(!isCheckboxTicked)
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <TopBackButton tapBack={didTapBack}></TopBackButton>
                <TopHeadingWithDesc heading={'Create your Profile'} description={'Complete your profile to unlock the full potential of the app and personalize your experience'}></TopHeadingWithDesc>

                <View style={{ flex: 13 }}>
                    <TextInput
                        autoCorrect={false}
                        autoFocus={false}
                        onBlur={() => { userPassword }}
                        blurOnSubmit={false}
                        keyboardType='ascii-capable'
                        enterKeyHint='next'
                        style={styles.textInputStyle}
                        outlineColor="#E7EBF3" outlineStyle={{ borderWidth: 1 }}
                        theme={{ roundness: 16 }} activeOutlineColor="#7F879A" mode="outlined"
                        label="Name"
                    />
                    <PhoneNumTextField
                        onChangeText={(text: string) => {
                            setUserPhoneNumber(text)
                        }}
                    ></PhoneNumTextField>
                    <TextInput
                        autoCorrect={false}
                        autoFocus={false}
                        onBlur={() => { userPassword }}
                        blurOnSubmit={false}
                        keyboardType='ascii-capable'
                        enterKeyHint='next'
                        style={styles.textInputStyle}
                        outlineColor="#E7EBF3" outlineStyle={{ borderWidth: 1 }}
                        theme={{ roundness: 16 }} activeOutlineColor="#7F879A" mode="outlined"
                        label="Email ID"
                    />
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
                    <View style={{ flexDirection: 'column', marginTop: 40 }}>
                        <View style={{ marginHorizontal: 30, height: 20, marginLeft: 30, marginBottom: 20, flexDirection: 'row' }}>
                            <TouchableImage
                                onPress={toggleCheckboxTicked}
                                {...styles.socialTouchables} imageSource={isCheckboxTicked ?  ImageName.pinkCheckmark : ImageName.uncheckedCheckmark} imageStyle={styles.countryCodeImg}></TouchableImage>
                            <H6 style={styles.countryCodeText}>{'I agree to the'}</H6>
                            <H6 style={styles.termstouse}>{'terms of use.'}</H6>
                        </View>
                        <Touchables
                            {...styles.loginTouchable}
                            onPress={() => {
                                navigation.navigate(ScreenNames.ResetPasswordOtpStep, {
                                    contactDetails: userPhoneNumber,
                                    contactType: CredentialTypes.phone
                                })
                            }}
                            titleStyle={styles.loginTouchableTitle}
                            title='Continue'></Touchables>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default SignUpPersonalInfo;