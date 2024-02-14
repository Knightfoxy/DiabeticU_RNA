import React from "react";
import { InputTextWithImageProp } from "./@types";
import { TextInput } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";

const TextInputWithImage = (props: InputTextWithImageProp) => {

    const {
        placeHolder,
        children,
        autoFocus,
        textStyle,
        textViewStyle,
        onChangeText,
        editable,
        onFocus,
        onPress,
        errorText = '',
        rightimageColor,
        rightimageSource,
        rightonPressImage,
        rightimageStyle,
        ...rest
    } = props;

    let borderColor = (errorText !== '') ? 'red' : '#E7EBF3';
    let activeBorderColor = (errorText !== '') ? 'red' : '#7F879A';

    return (
        <TextInput
            editable={editable}
            selectTextOnFocus={false}
            autoCorrect={false}
            autoFocus={autoFocus}
            blurOnSubmit={false}
            keyboardType='ascii-capable'
            enterKeyHint='next'
            onFocus={onFocus}
            style={[props]}
            textColor="black"
            outlineColor={borderColor} outlineStyle={{ borderWidth: 1 }}
            theme={{ roundness: 16, colors: { onSurfaceVariant: borderColor } }} activeOutlineColor={activeBorderColor} mode="outlined"
            label={placeHolder}
            value={children}
            right={<TextInput.Icon color={rightimageColor} style={rightimageStyle} icon={rightimageSource} onPress={rightonPressImage} />}
            onChangeText={onChangeText}
        />
    );

};

export default TextInputWithImage;