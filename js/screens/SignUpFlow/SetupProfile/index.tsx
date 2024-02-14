import React from "react";
import { ScrollView, View } from "react-native";
import { ImageName } from "../../../assets";
import styles from "./styles";
import TopBackButton from "../../../components/BackButton";
import TopHeadingWithDesc from "../../../components/TopHeadingWithDesc";
import Touchables from "../../../primitives/TouchableOpacity";
import { TextInput } from "react-native-paper";
import { H6 } from "../../../primitives/Text";

function SetupProfileScreen({ navigation }) {


    function didTapBack() {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <ScrollView style={{height: 800}}>
                <View style={{ marginTop: 10, flex: 1 }}>
                    <TopBackButton tapBack={didTapBack}></TopBackButton>
                    <TopHeadingWithDesc heading={'Setup Profile'} description={'Complete your profile to unlock the full potential of the app and personalize your experience'}></TopHeadingWithDesc>
                </View>
                <View style={{ marginTop: 10, flex: 2 }}>
                    <TextInput
                        autoCorrect={false}
                        keyboardType='ascii-capable'
                        enterKeyHint='done'
                        style={styles.textInputStyle} outlineColor="#E7EBF3" outlineStyle={{ borderWidth: 1 }}
                        theme={{ roundness: 16 }} activeOutlineColor="#7F879A" mode="outlined"
                            right={<TextInput.Icon size={16} color="#DA2A31" style={{ top: 5 }} icon={ImageName.redCross} />}
                        label="Username"
                    // value={userPassword}
                    // onChangeText={text => {
                    //     setUserPassword(text)
                    // }}
                        />
                        <View style={styles.tryInsteadStyle} >
                            <H6 style={styles.tryInsteadTitle}>{'Try instead  '}</H6>
                            <H6 style={styles.suggestedUsernameTitle}>{'Matthew_03'}</H6>
                        </View>
                    <TextInput
                        autoCorrect={false}
                        keyboardType='ascii-capable'
                        enterKeyHint='done'
                        style={styles.textInputStyle} outlineColor="#E7EBF3" outlineStyle={{ borderWidth: 1 }}
                        theme={{ roundness: 16 }} activeOutlineColor="#7F879A" mode="outlined"
                            right={<TextInput.Icon color="#000080"
                                size={16}
                                style={{ top: 5 }}
                                icon={ImageName.calenderIcon} />}
                        label="Birthday"
                    // value={userPassword}
                    // onChangeText={text => {
                    //     setUserPassword(text)
                    // }}
                        />
                        
                    <TextInput
                        autoCorrect={false}
                        autoFocus={false}
                        // onBlur={() => { userPassword }}
                        blurOnSubmit={false}
                        keyboardType='ascii-capable'
                        enterKeyHint='next'
                        style={styles.textInputStyle}
                        outlineColor="#E7EBF3" outlineStyle={{ borderWidth: 1 }}
                        theme={{ roundness: 16 }} activeOutlineColor="#7F879A" mode="outlined"
                            right={<TextInput.Icon size={10} color="#000080" style={{ top: 5, width: 10, height: 12 }} icon={ImageName.chevronDownBlue} />}
                        label="Gender"
                    />
                    <TextInput
                        autoCorrect={false}
                        autoFocus={false}
                        // onBlur={() => { userPassword }}
                        blurOnSubmit={false}
                        keyboardType='ascii-capable'
                        enterKeyHint='next'
                        style={styles.textInputStyle}
                        outlineColor="#E7EBF3" outlineStyle={{ borderWidth: 1 }}
                        theme={{ roundness: 16 }} activeOutlineColor="#7F879A" mode="outlined"
                        label="Referral Code (Optional)"
                    />
                </View>
                </ScrollView>
            </View>
            <View style={{ height: 96}}>
                <Touchables
                    {...styles.loginTouchable}
                    onPress={() => {
                        // navigation.navigate(ScreenNames.ResetPasswordOtpStep, {
                        //     contactDetails: userPhoneNumber,
                        //     contactType: CredentialTypes.phone,
                        //     navigationFrom: NavigationToOtpScreen.signupFlow
                        // })
                    }}
                    titleStyle={styles.loginTouchableTitle}
                    title='Continue'></Touchables>
            </View>
        </View>
    );
};

export default SetupProfileScreen;