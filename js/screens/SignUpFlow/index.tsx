import React, { useState } from "react";
import { ScrollView, View } from "react-native";
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
import NavigationToOtpScreen from "../ForgotPasswordFlow/ForgotPassword/navigationFrom";
import TextInputWithImage from "../../primitives/InputTextWithImage";


interface UserData {
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
    validation: {
        name: boolean;
        email: boolean;
        phoneNumber: boolean;
        password: boolean;
        aggreedToTnC: boolean;
    };
}

const SignUpPersonalInfo: React.FC = ({ navigation }) => {

    const [isPasswordTyped, setispasswordTyped] = useState(false)
    const [isSecurePasswordEntry, setIsSecurePasswordEntry] = useState(true)
    const [isCheckboxTicked, setIsCheckboxTicked] = useState(false)
    const [userData, setUserData] = useState<UserData>({
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        validation: {
            name: true,
            email: true,
            phoneNumber: true,
            password: true,
            aggreedToTnC: false
        },
    })

    function didTapBack() {
        navigation.goBack()
    }

    function toggleSecurePassword() {
        setIsSecurePasswordEntry(!isSecurePasswordEntry)
    }

    function toggleCheckboxTicked() {
        setIsCheckboxTicked(!isCheckboxTicked)
    }

    const handleInputChange = (field: keyof UserData, value: string) => {
        setUserData({
            ...userData,
            [field]: value,
            validation: {
                ...userData.validation,
                [field]: true,
            },
        });
    };

    const validatingInputs = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneNumberRegex = /^\d{10}$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()-_+=]).{8,15}$/;
        const newValidation: Partial<UserData['validation']> = {};

        newValidation.name = userData.name.trim() !== '';
        newValidation.email = emailRegex.test(userData.email);
        newValidation.phoneNumber = phoneNumberRegex.test(userData.phoneNumber);
        newValidation.password = passwordRegex.test(userData.password);
        newValidation.aggreedToTnC = isCheckboxTicked

        setUserData({
            ...userData,
            validation: newValidation as UserData['validation'],
        });

        console.log('User data is', userData)
        return Object.values(newValidation).every((isValid) => isValid);
    };

    const checkIsPasswordFilled = (text: string) => {
        setispasswordTyped((text.trim() === '') ? false : true)
    };

    function handleContinuePressed() {
        if (validatingInputs()) {
            navigation.navigate(ScreenNames.ResetPasswordOtpStep, {
                contactDetails: userData.phoneNumber,
                contactType: CredentialTypes.phone,
                navigationFrom: NavigationToOtpScreen.signupFlow
            })
        } else {
            console.log('Invalid')
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.container}>
                    <TopBackButton tapBack={didTapBack}></TopBackButton>
                    <TopHeadingWithDesc heading={'Create your Profile'} description={'Complete your profile to unlock the full potential of the app and personalize your experience'}></TopHeadingWithDesc>

                    <View style={{ flex: 1 }}>
                        <TextInputWithImage errorText={!userData.validation.name ? 'Enter a valid name.' : ''}
                            autoCorrect={false}
                            autoFocus={false}
                            blurOnSubmit={true}
                            keyboardType='default'
                            enterKeyHint='next'
                            {...styles.textInputStyle}
                            onChangeText={(text: string) => {
                                    handleInputChange('name', text)
                            }} placeHolder={'Name'}
                        />
                        <PhoneNumTextField
                            errorText={!userData.validation.phoneNumber ? 'Enter a valid name.' : ''}
                            onChangeText={(text: string) => {
                                    handleInputChange('phoneNumber', text)
                            }}
                        ></PhoneNumTextField>
                        <TextInputWithImage
                            errorText={!userData.validation.email ? 'Enter a valid name.' : ''}
                            autoCorrect={false}
                            autoFocus={false}
                            blurOnSubmit={true}

                            keyboardType='default'
                            enterKeyHint='next'
                            {...styles.textInputStyle}
                            onChangeText={(text: string) => {
                                handleInputChange('email', text)
                            }}
                            placeHolder={'Email ID'}
                        />
                        <TextInputWithImage
                            errorText={!userData.validation.password ? 'Enter a valid name.' : ''}
                            autoCorrect={false}
                            autoFocus={false}
                            blurOnSubmit={true}
                            keyboardType='default'
                            enterKeyHint='done'
                            rightimageColor="#000080"
                            rightimageSource={ImageName.togglePassword}
                            rightimageStyle={{ top: 5 }}
                            rightonPressImage={toggleSecurePassword}
                            {...styles.textInputStyle}
                            onChangeText={(text: string) => {
                                handleInputChange('password', text)
                                checkIsPasswordFilled(text)
                            }}
                            placeHolder={'New Password'}
                        />
                        {isPasswordTyped && (<PasswordValidatorView />)}
                    </View>
                </View>
            </ScrollView>
            <View style={{ flexDirection: 'column', marginTop: 10, marginBottom: 36 }}>
                <View style={{ marginHorizontal: 30, height: 20, marginLeft: 30, marginBottom: 20, flexDirection: 'row' }}>
                    <TouchableImage
                        onPress={toggleCheckboxTicked}
                        {...styles.socialTouchables} imageSource={isCheckboxTicked ? ImageName.pinkCheckmark : ImageName.uncheckedCheckmark} imageStyle={styles.countryCodeImg}></TouchableImage>
                    <H6 style={styles.countryCodeText}>{'I agree to the'}</H6>
                    <H6 style={styles.termstouse}>{'terms of use.'}</H6>
                </View>
                <Touchables
                    {...styles.loginTouchable}
                    onPress={handleContinuePressed}
                    titleStyle={styles.loginTouchableTitle}
                    title='Continue'></Touchables>
            </View>
        </View>
    );
};

export default SignUpPersonalInfo;