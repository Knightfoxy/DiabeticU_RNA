import React, { ReactNode } from "react";
import {TextStyle } from "react-native";
import { TextProps } from "react-native";

export interface TextProp extends TextProps, TextStyle {
    children: ReactNode;
    style?: TextStyle | TextStyle[];
}