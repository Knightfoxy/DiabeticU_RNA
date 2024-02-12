import React from "react";
import { InputTextProp } from "./@types";
import { TextInput } from "react-native-paper";

const BasicTextInput = (props: InputTextProp) => {

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
        ...rest
    } = props;

    let borderColor = (errorText !== '') ? 'red' : '#E7EBF3';
    let activeBorderColor = (errorText !== '') ? 'red' : '#7F879A';
    console.log(borderColor)

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
            outlineColor={borderColor} outlineStyle={{ borderWidth: 1 }}
            theme={{ roundness: 16 }} activeOutlineColor={activeBorderColor} mode="outlined"
            label={placeHolder}
            value={children}
            onChangeText={onChangeText}
        />
    );

};

export default BasicTextInput;