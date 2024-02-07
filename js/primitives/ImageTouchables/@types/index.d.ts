import React from "react";
import { ViewStyle, TextStyle, ImageStyle, ImageSourcePropType } from "react-native";

export interface TouchablImageProp extends TouchableOpacityProps, ViewStyle {
    imageSource: ImageSourcePropType;
    imageStyle?: ImageStyle;
    buttonStyle?: ViewStyle;
    disabled?: boolean;
    onPress?: () => void;
}