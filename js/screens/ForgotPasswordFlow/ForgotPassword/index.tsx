import React, {useState} from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { ImageName } from "../../../assets";
import styles from "./styles";
import { H1, H6 } from "../../../primitives/Text";
import { ScreenNames } from "../../../navigators/screenNames";
import TopBackButton from "../../../components/BackButton";
import TopHeadingWithDesc from "../../../components/TopHeadingWithDesc";
import CredentialTypes from "./credentialTypes";

function InitiateForgotPassword({ navigation }) {

    function didTapBack() {
        navigation.goBack()
    }

    return (

        <View style={styles.container}> 
            <TopBackButton tapBack={didTapBack}></TopBackButton>
            <TopHeadingWithDesc heading={'Forgot Password'} description={'Please select your reset mechanism to recover your password'}></TopHeadingWithDesc>

            <View style={{ flex: 13 }}>
                <View style={{ flex: 0.45, flexDirection: 'row', marginTop: 20, }}>
                    <TouchableOpacity
                        style={[styles.credTypeTouchableBg, { marginLeft: 30, marginRight: 16 }]}
                        onPress={() => {
                            navigation.navigate(ScreenNames.ForgotPasswordAddCredentials, {
                                credentailType: CredentialTypes.email
                            })
                        }}>
                        <Image style={styles.credTypeImg} source={ImageName.emailPostImg}></Image>
                        <H6 style={styles.credsHeading}> Use Email ID</H6>
                        <H6 style={[styles.descriptionText, { marginLeft: 16 }]}>Send OTP to your email to reset your password</H6>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.credTypeTouchableBg, { marginRight: 30 }]}
                        onPress={() => {
                            navigation.navigate(ScreenNames.ForgotPasswordAddCredentials, {
                                credentailType: CredentialTypes.phone
                            })
                        }}>
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