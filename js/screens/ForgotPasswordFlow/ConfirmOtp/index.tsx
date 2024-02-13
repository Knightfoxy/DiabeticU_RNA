import React, { useState, useRef } from "react";
import { View } from "react-native";
import styles from "./styles";
import { H6 } from "../../../primitives/Text";
import { TextInput } from "react-native-paper";
import Touchables from "../../../primitives/TouchableOpacity";
import TopBackButton from "../../../components/BackButton";
import TopHeadingWithDesc from "../../../components/TopHeadingWithDesc";
import { ScreenNames } from "../../../navigators/screenNames";

function ResetPasswordOtpStep({ route, navigation }) {

    const contactDetails = route.params.contactDetails
    const contactType = route.params.contactType
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = useRef([
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),1
    ]);
    function didTapBack() {
        navigation.goBack()
    }

    const handleInputChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (index < 3 && value !== '') {
            inputRefs.current[index + 1];
        }
    };

    return (
        <View style={styles.container}>
            <TopBackButton tapBack={didTapBack}></TopBackButton>
            <View style={{ marginTop: 10, height: 100 }}>
                <TopHeadingWithDesc heading={(contactType == 1) ? 'Verify Email' : 'Verify Phone Number'} description={'Enter the code that we just sent to you on'}></TopHeadingWithDesc>
                <H6 style={styles.contactText} >{contactDetails}</H6>
            </View>
            <View style={{ flex: 3, flexDirection: 'column', marginTop: 40 }}>
                <H6 style={styles.contactText}>4-digit Code</H6>
                <View style={{ height: 60, flexDirection: 'row', marginHorizontal: 30 }}>
                    <TextInput
                        style={styles.textInputStyle}
                        maxLength={1}
                        keyboardType="numeric"
                        value={otp[0]}
                        onChangeText={(text) => handleInputChange(0, text)}
                        ref={inputRefs.current[0]}
                        outlineColor="#E7EBF3" outlineStyle={{ borderWidth: 1 }}
                        theme={{ roundness: 16, colors: { text: 'black' } }} activeOutlineColor="#7F879A" mode="outlined"
                    />
                    <TextInput
                        style={styles.textInputStyle}
                        maxLength={1}
                        keyboardType="numeric"
                        value={otp[1]}
                        onChangeText={(text) => handleInputChange(1, text)}
                        ref={inputRefs.current[1]}
                        outlineColor="#E7EBF3" outlineStyle={{ borderWidth: 1 }}
                        theme={{ roundness: 16, colors: { text: 'black' } }} activeOutlineColor="#7F879A" mode="outlined"
                    />
                    <TextInput
                        style={styles.textInputStyle}
                        maxLength={1}
                        keyboardType="numeric"
                        value={otp[2]}
                        onChangeText={(text) => handleInputChange(2, text)}
                        ref={inputRefs.current[2]}
                        outlineColor="#E7EBF3" outlineStyle={{ borderWidth: 1 }}
                        theme={{ roundness: 16, colors: { text: 'black' } }} activeOutlineColor="#7F879A" mode="outlined"
                    />
                    <TextInput
                        style={styles.textInputStyle}
                        maxLength={1}
                        keyboardType="numeric"
                        value={otp[3]}
                        onChangeText={(text) => handleInputChange(3, text)}
                        ref={inputRefs.current[3]}
                        outlineColor="#E7EBF3" outlineStyle={{ borderWidth: 1 }}
                        theme={{ roundness: 16, colors: { text: 'black' } }} activeOutlineColor="#7F879A" mode="outlined"
                    />
                </View>
                <Touchables
                    titleStyle={styles.signupTouchableTitle}
                    {...styles.signupTouchable}
                    title='Resend'>
                </Touchables>
                <Touchables
                    {...styles.loginTouchable}
                    titleStyle={styles.loginTouchableTitle}
                    onPress={() => {
                        navigation.navigate(ScreenNames.SetPasswordForgotFlow)
                    }}
                    title='Verify'></Touchables>
                <View style={{ flex: 4, flexDirection: 'column' }}></View>
            </View>
        </View>
    );
};

export default ResetPasswordOtpStep;