import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenNames } from "./screenNames";
import SplashScreen from "../screens/SplashScreen";
import LandingScreen from "../screens/LandingScreen";
import LoginScreen from "../screens/Login";
import InitiateForgotPassword from "../screens/ForgotPasswordFlow/ForgotPassword";
import ForgotPasswordStepOne from "../screens/ForgotPasswordFlow/ForgotPassStepOne";
import ResetPasswordOtpStep from "../screens/ForgotPasswordFlow/ConfirmOtp";
import SetPasswordForgotFlow from "../screens/ForgotPasswordFlow/SetPassword";

const Stack = createNativeStackNavigator();

function BaseNavigator() {
    return (
        <Stack.Navigator initialRouteName={ScreenNames.Splash}>
            <Stack.Screen
                name={ScreenNames.Splash}
                component={SplashScreen}
                options={{ headerShown: false }} />
            <Stack.Screen
                name={ScreenNames.Landing}
                component={LandingScreen}
                options={{ headerShown: false }} />
            <Stack.Screen
                name={ScreenNames.Login}
                component={LoginScreen}
                options={{ headerShown: false }} />
            <Stack.Screen
                name={ScreenNames.InitiateForgotPassword}
                component={InitiateForgotPassword}
                options={{ headerShown: false }} />
            <Stack.Screen
                name={ScreenNames.ForgotPasswordAddCredentials}
                component={ForgotPasswordStepOne}
                options={{ headerShown: false }} />
            <Stack.Screen
                name={ScreenNames.ResetPasswordOtpStep}
                component={ResetPasswordOtpStep}
                options={{ headerShown: false }} />
            <Stack.Screen
                name={ScreenNames.SetPasswordForgotFlow}
                component={SetPasswordForgotFlow}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default BaseNavigator;