import React, { useState } from "react";
import styles from "./styles";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageName } from "../../assets";
import { H6 } from "../../primitives/Text";
import Touchables from "../../primitives/TouchableOpacity";
import { ScreenNames } from "../../navigators/screenNames";
import HeadingAndDescVertical from "../../components/TopHeadingWithDesc";
import ManualSignInFlow from "./Components/ManualLoginSection";
import SocialSignInFlow from "./Components/SocialLoginSection";
import BiometricFlow from "./Components/Biometric";

function LoginScreen({ navigation }) {
    console.log('Rendering Login Screen.')
    const [loginData, setLoginData] = useState({})
    const [isContactDetailValid, setContactDetailValid] = useState(true)
    const [isPasswordValid, setPasswordValid] = useState(true)
    function navigateToForgotPasswordScreen() {
        navigation.navigate(ScreenNames.InitiateForgotPassword)
    }

    const loginTappedHandler = () => {
        console.log('Login pressed')
        console.log(loginData)

    }

    const handleFetchDataFromLoginForm = (data: any) => {
        setLoginData(data)
    }

    return (
        <SafeAreaView style={styles.container}>

            <View
                style={{ flex: 2.4 }}>
                <Image style={styles.loginAppIcon} source={ImageName.loginAppIcon} />
            </View>
            <HeadingAndDescVertical
                heading={'Login'} description={'We missed you! Please login to continue using this app.'}>
            </HeadingAndDescVertical>
            <ManualSignInFlow navigateToForgetPassword={navigateToForgotPasswordScreen} onFetchDataCallback={handleFetchDataFromLoginForm} ></ManualSignInFlow>
            <View
                style={{ flex: 3, justifyContent: 'space-around' }}>

                <Touchables
                    {...styles.loginTouchable}
                    titleStyle={styles.loginTouchableTitle}
                    onPress={loginTappedHandler}
                    title='Login'>
                </Touchables>



                <View style={styles.touchableSignupBg}>
                    <H6 style={{ color: '#7F879A' }}>Create an account ?</H6>
                    <Touchables
                        onPress={() => {
                            navigation.navigate(ScreenNames.SignUpPersonalInfo)
                        }}
                        titleStyle={styles.signupTouchableTitle}
                        {...styles.signupTouchable}
                        title='Signup'>
                    </Touchables>
                    <TouchableOpacity style={{ width: 30, height: 20 }}
                        onPress={() => { navigation.goBack() }}>
                        <Text>back</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <SocialSignInFlow></SocialSignInFlow>
            <BiometricFlow></BiometricFlow>
        </SafeAreaView>
    );
};

export default LoginScreen;


// Credentail Type InputField
//   1. Keyboard Type: Default - Done
//   2. As typed a alphabet component Change from Phone Number to Email.  - Done
//   3. In case of typing a first Numerical Component will be Phone Number Type. - Done
//   4. Check on every text entered verify if a number or a alphabet. to change the component.  - Done
//   5. Everytime the Text is inputed, the textfield heading changes bw Email and Password.  - Done
//   6. When tapped on return the Password TF activates.
//   7. On Pressing anywhere on screen, Keyboard shuts down and both TF deactivates. - Not Needed


//  Password InputField
//   1. When tapped on return the Password TF deactivates and keyboard goes down. - Done
//   2. On Pressing anywhere on screen, Keyboard shuts down and both TF deactivates. - Not Needed
//   3. On toggling the SeePassword Button secure entry toggles on Password Field. - Done