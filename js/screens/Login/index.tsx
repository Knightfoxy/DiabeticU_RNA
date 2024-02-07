import React, { useState } from "react";
import styles from "./styles";
import { Image, TouchableOpacity, View, Text, Touchable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageName } from "../../assets";
import metrics from "../../themes/metrics";
import { H1, H6 } from "../../primitives/Text";
import { Button, TextInput } from 'react-native-paper';
import Touchables from "../../primitives/TouchableOpacity";
import LinearGradient from 'react-native-linear-gradient';
import TouchableImage from "../../primitives/ImageTouchables";
import { ScreenNames } from "../../navigators/screenNames";

function LoginScreen({ navigation }) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    console.log('Rendering Login Screen.')
    return (
        <SafeAreaView style={styles.container}>

            <View style={{ backgroundColor: 'white', flex: 3 }}>
                <Image style={styles.loginAppIcon} source={ImageName.loginAppIcon} />
            </View>

            <View style={{ backgroundColor: 'white', flex: 2.5, justifyContent: 'space-around'}}>
                <H1 style={styles.h1}>Login</H1>
                <H6 style={styles.h5}>We missed you! Please login to continue using this app.</H6>
            </View>

            <View style={{ backgroundColor: 'white', flex: 5.5}}>
                <TextInput
                    style={styles.textInputStyle}
                    outlineColor="#E7EBF3" outlineStyle={{ borderWidth: 1 }}
                    theme={{ roundness: 16, colors: { text: 'green' } }} activeOutlineColor="#E7EBF3" mode="outlined"
                    label="Phone Number/Email ID" value={phoneNumber} onChangeText={text => setPhoneNumber(text)}
                />
                <TextInput
                    style={styles.textInputStyle} outlineColor="#E7EBF3" outlineStyle={{ borderWidth: 1 }}
                    theme={{ roundness: 16 }} activeOutlineColor="#E7EBF3" mode="outlined"
                    secureTextEntry={true}
                    right={<TextInput.Icon iconColor="#000080" icon={ImageName.togglePassword} onPress={() => { console.log('tapped password') }} />}
                    label="Password" value={password} onChangeText={text => setPassword(text)}
                />
                <Touchables
                    titleStyle={styles.forgotTapStyle}
                    onPress={() => {
                        console.log('Tapped FOrtgot Password')
                        navigation.navigate(ScreenNames.InitiateForgotPassword)
                    }}
                    {...styles.forgotTouchable}
                    title="Forgot Password?">
                </Touchables>
            </View>

            <View style={{ backgroundColor: 'white', flex: 3, justifyContent: 'space-around' }}>
                <Touchables
                    {...styles.loginTouchable}
                    titleStyle={styles.loginTouchableTitle}
                    onPress={() => {
                        navigation.navigate(ScreenNames.Login)
                    }}
                    title='Login'>
                </Touchables>
                <View style={styles.touchableSignupBg}>
                    <H6 style={{ color: '#7F879A' }}>Create an account ?</H6>
                    <Touchables
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

            <View style={{ backgroundColor: 'white', flex: 2.5, marginBottom: 10 }}>
                <View style={styles.touchableSeperatorBg}>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#FFFFFF', '#E5EBF5']} style={{ height: 2, width: 100, marginRight: 10 }} />
                    <H6 style={{ color: '#7F879A' }}>or continue with</H6>
                    <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} colors={['#FFFFFF', '#E5EBF5']} style={{ height: 2, width: 100, marginLeft: 10 }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 30 }} >
                    <TouchableImage {...styles.socialTouchables} imageSource={ImageName.googleIcon} imageStyle={styles.socialIcons}></TouchableImage>
                    <TouchableImage {...styles.socialTouchables} imageSource={ImageName.fbCircular} imageStyle={styles.socialIcons}></TouchableImage>
                    <TouchableImage {...styles.socialTouchables} imageSource={ImageName.appleIcon} imageStyle={styles.socialIcons}></TouchableImage>
                </View>
            </View>

            <View style={{ backgroundColor: '#0000801a', flex: 1.5, flexDirection: 'row' }}>
                <Image style={styles.biometricimg} source={ImageName.biometicImg}></Image>
                <H6 style={styles.biometricText}>Use Biometric</H6>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;