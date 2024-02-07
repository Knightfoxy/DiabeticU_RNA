import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { TouchableProps } from "./@types";

const Touchables = (props: TouchableProps) => {

    const {
        color,
        center,
        titleWidth,
        title,
        titleColor,
        fontWeight,
        disabled,
        onPress = () => { },
        accessible,
        borderWidth,
        titleStyle,
        width,
        height,
        backgroundColor,
        flexDirection,
        alignSelf,
        justifyContent,
        alignItems,
        borderRadius,
        ...rest
    } = props;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[props,{opacity: disabled ? '20%' : '100%'}]}
            disabled={disabled || false}
        >
            <Text style={titleStyle}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Touchables;