import React, { useState } from "react";
import { View, Keyboard } from "react-native";
import styles from "./styles";
import Touchables from "../../../primitives/TouchableOpacity";
import TopBackButton from "../../../components/BackButton";
import TopHeadingWithDesc from "../../../components/TopHeadingWithDesc";
import BasicTextInput from "../../../primitives/InputText";
import { ScreenNames } from "../../../navigators/screenNames";
import Toast from "react-native-toast-message";
import toastConfig from "../../../components/Toast";

function ForgotPasswordStepOne({ route, navigation }: { route: any, navigation: any }) {

    const [isValidContact, setIsValidContact] = useState(true);
    const [isTextInputActive, setIsTextInputActive] = useState(true);
    const [error, setError] = useState('');
    const crdType = route.params.credentailType
    const [contactDetail, setContactDetail] = useState('')

    function didTapBack() {
        navigation.goBack()
    }

    const handleSave = () => {
        Keyboard.dismiss();
        setIsTextInputActive(false);
        const validationResult = validateContactDetail(contactDetail);
        setIsValidContact(validationResult.valid);
        setError(validationResult.error)
        if (!validationResult.valid) {
            console.log(validationResult.error);
            showToast()
        } else {
            navigation.navigate(ScreenNames.ResetPasswordOtpStep, {
                contactDetails: contactDetail,
                contactType: crdType
            })
        }
    };

    const validateContactDetail = (input: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^(\+\d{1,2}\s?)?(\d{3,4}[\s.-]?)?\d{7,}$/;

        if (input.trim() === '') {
            return { valid: false, error: 'Contact Detail cannot be empty' };
        } else if ((crdType == 1) ? (!emailRegex.test(input)) : (!phoneRegex.test(input))) {
            return { valid: false, error: 'Invalid contact format' };
        } else {
            return { valid: true, error: '' };
        }
    };

    const handleTextInputOnFocus = () => {
        setError('')
    }

    function showToast() {
        Toast.show({
            text1: 'Incorrect email',
            text2: 'The password that you’ve entered is incorrect. ',
            position: 'bottom',
            type: 'tomatoToast',
            visibilityTime: 1000,
            onShow: () => console.log('OnSHow'),
            onPress: () => console.log('OnSHow'),
            onHide: () => console.log('OnSHow'),
        });
    }

    return (
        <View style={styles.container}>
            <TopBackButton tapBack={didTapBack}></TopBackButton>
            <TopHeadingWithDesc heading={'Forgot Password'} description={'Please enter the credentials of the account you want to reset the password for'}></TopHeadingWithDesc>
            <View style={{ flex: 14, marginTop: 10 }}>
                <BasicTextInput
                    {...styles.textInputStyle}
                    errorText={error}
                    onFocus={handleTextInputOnFocus}
                    autoFocus={true}
                    onChangeText={(text) => {
                        setContactDetail(text)
                    }}
                    placeHolder={(crdType == 1) ? 'Email' : 'Phone Number'}></BasicTextInput>
                <Touchables
                    {...styles.loginTouchable}
                    titleStyle={styles.loginTouchableTitle}
                    onPress={handleSave}
                    title='Verify'></Touchables>
            </View>
            <Toast config={toastConfig} />
        </View>
    );
};

export default ForgotPasswordStepOne;