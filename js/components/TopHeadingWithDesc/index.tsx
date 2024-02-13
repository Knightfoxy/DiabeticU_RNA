import React from "react";
import { View } from "react-native";
// import { useMemo } from "react";
import { H1, H6 } from "../../primitives/Text";
import { memo } from "react";


function HeadingAndDescVertical({ heading, description }) {
    return (
        <View style={{ flex: 3, justifyContent: 'space-around'}}>
            <H1 style={{ marginLeft: 30, color: '#0B152D' }}>{heading}</H1>
            <H6 style={{ marginHorizontal: 30, color: '#9CA0AB' }}>{description}</H6>
        </View>
    );
}
export default memo(HeadingAndDescVertical);