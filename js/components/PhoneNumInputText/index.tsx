import React from "react";
import styles from "./styles";
import { View, TouchableOpacity, Image } from "react-native";
import { ImageName } from "../../assets";
import BasicTextInput from "../../primitives/InputText";
import { H6 } from "../../primitives/Text";
import { memo } from "react";


function PhoneNumTextField({ onChangeText }) {

    const handleTextChange = (text: string) => {
        onChangeText(text);
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={styles.countryCodeView}>
                <Image source={ImageName.flagImg} style={styles.countryCodeImg}></Image>
                <H6 style={styles.countryCodeText} >+91</H6>
                <Image source={ImageName.chevronBottom} style={styles.countryCodeChevronImg}></Image>
            </TouchableOpacity>
            <BasicTextInput
                {...styles.textInputStyle}
                autoFocus={false}
                onChangeText={handleTextChange}
                placeHolder='Phone Number'></BasicTextInput>
        </View>
    );
}
export default (PhoneNumTextField);
