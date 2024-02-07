import React from "react";
import { TouchablImageProp } from "./@types";
import { Image, TouchableOpacity } from "react-native";

const TouchableImage = (props: TouchablImageProp) => {

    const {
        imageSource,
        imageStyle,
        onPress,
        ...rest
    } = props;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[props, {justifyContent: 'center', alignItems: 'center' }]}>
            <Image source={imageSource} style={[imageStyle, {resizeMode: 'contain' }]}></Image>
        </TouchableOpacity>
    );

};

export default TouchableImage;