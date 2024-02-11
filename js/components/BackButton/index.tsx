import React from "react";
import { View } from "react-native";
import styles from "./styles";
import TouchableImage from "../../primitives/ImageTouchables";
import { ImageName } from "../../assets";


function TopBackButton({ tapBack }) {

    function didTapBack() {
        tapBack()
    }

    return (
        <View style={styles.rowContainer}>
            <TouchableImage
                {...styles.backTouchable}
                onPress={didTapBack}
                imageSource={ImageName.backChevron}
                imageStyle={styles.backImageStyle}></TouchableImage>
        </View>
    );
}
export default TopBackButton;