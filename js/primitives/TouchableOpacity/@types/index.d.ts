import React from "react";
import { ColorSchemeName, ColorValue, TouchableOpacityProps, ViewStyle, TextStyle } from "react-native";

export interface TouchableProps extends TouchableOpacityProps, ViewStyle {
  color?: string;
  center?: boolean;
  titleWidth?: any;
  title?: string;
  titleStyle?: TextStyle;
  fontWeight?: string; 
  titleColor?: ColorValue;
  disabled?: boolean;
  onPress?: () => void;
  accessible?: boolean;
  borderWidth?: number;
  width?: DimensionValue;
  height?: DimensionValue;
  borderColor?: ColorValue;
  backgroundColor?: ColorValue;
  flexDirection?:
  | 'row'
  | 'column'
  | undefined
  | 'row-reverse'
  | 'column-reverse';
  alignSelf?:
  | 'auto'
  | 'center'
  | 'stretch'
  | 'flex-end'
  | 'baseline'
  | 'flex-start';
  justifyContent?:
  | 'center'
  | 'flex-end'
  | 'flex-start'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';
  alignItems?: FlexAlignType | undefined;
  borderRadius?: AnimatableNumericValue;
}