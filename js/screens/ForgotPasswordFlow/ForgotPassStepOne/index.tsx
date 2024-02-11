import React from "react";
import { View } from "react-native";
import styles from "./styles";
import Touchables from "../../../primitives/TouchableOpacity";
import TopBackButton from "../../../components/BackButton";
import TopHeadingWithDesc from "../../../components/TopHeadingWithDesc";
import BasicTextInput from "../../../primitives/InputText";
import CredentialTypes from "../ForgotPassword/credentialTypes";

function ForgotPasswordStepOne({ route, navigation }) {

    const crdType = route.params.credentailType

    console.log(route.params.credentailType)
    function didTapBack() {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <TopBackButton tapBack={didTapBack}></TopBackButton>
            <TopHeadingWithDesc heading={'Forgot Password'} description={'Please enter the credentials of the account you want to reset the password for'}></TopHeadingWithDesc>
            <View style={{ flex: 14, marginTop: 10 }}>
                <BasicTextInput
                    {...styles.textInputStyle}
                    autoFocus={false}
                    placeHolder={(crdType == 1) ? 'Email' : 'Phone Number'}></BasicTextInput>
                <Touchables
                    {...styles.loginTouchable}
                    titleStyle={styles.loginTouchableTitle}
                    title='Verify'></Touchables>
            </View>
        </View>
    );
};

export default ForgotPasswordStepOne;