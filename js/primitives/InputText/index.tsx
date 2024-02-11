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
        onPress,
        ...rest
    } = props;

    return (
        <TextInput
            autoCorrect={false}
            autoFocus={autoFocus}
            // onBlur={() => { userPassword }}
            blurOnSubmit={false}
            keyboardType='ascii-capable'
            enterKeyHint='next'
            style={[props]}
            outlineColor="#E7EBF3" outlineStyle={{ borderWidth: 1 }}
            theme={{ roundness: 16 }} activeOutlineColor="#7F879A" mode="outlined"
            label={placeHolder}
            value={children}
            onChangeText={onChangeText}
        />
    );

};

export default BasicTextInput;