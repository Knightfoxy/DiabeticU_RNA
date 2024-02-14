import React, { ReactNode } from "react";
import { ViewStyle, TextStyle, ImageStyle, ImageSourcePropType, KeyboardType, EnterKeyHintType } from "react-native";
import { IconSource } from "react-native-paper/lib/typescript/components/Icon";
import { TextInputLabelProp } from "react-native-paper/lib/typescript/components/TextInput/types";

export interface InputTextWithImageProp extends TouchableOpacityProps, ViewStyle {
    placeHolder?: TextInputLabelProp;
    autoCorrect?: boolean;
    autoFocus?: boolean;
    children?: string;
    editable?: boolean;
    textStyle?: TextStyle;
    disabled?: boolean;
    keyboardType: KeyboardType;
    onFocus?: (args: any) => void;
    blurOnSubmit?: boolean;
    textViewStyle?: ViewStyle;
    errorText?: string | null;
    enterKeyHint: EnterKeyHintType;
    onChangeText?: (text: string) => void;
    onPress?: () => void;
    rightimageSource?: IconSource,
    rightimageColor?: string,
    rightimageStyle?: ImageStyle,
    rightonPressImage?: (args: any) => void,
}