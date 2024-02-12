import React, { ReactNode } from "react";
import { ViewStyle, TextStyle, ImageStyle, ImageSourcePropType } from "react-native";
import { TextInputLabelProp } from "react-native-paper/lib/typescript/components/TextInput/types";

export interface InputTextProp extends TouchableOpacityProps, ViewStyle {
    placeHolder?: TextInputLabelProp;
    autoFocus?: boolean;
    children?: string;
    editable?: boolean;
    textStyle?: TextStyle;
    disabled?: boolean;
    onFocus?: (args: any) => void;
    textViewStyle?: ViewStyle;
    errorText?: string | null;
    onChangeText?: (text: string) => void;
    onPress?: () => void;
}