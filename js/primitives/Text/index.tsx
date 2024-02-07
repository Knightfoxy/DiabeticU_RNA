import React, { ReactNode } from "react";
import { TextProp } from "./@types";
import { Text } from "react-native";


const BaseText = ({ style, children, ...restProps }: TextProp) => (
    <Text style={[{ fontSize: 14 }, style]} {...restProps}>
        {children}
    </Text>
);

export const H1 = ({ style, children, ...restProps }: TextProp) => (
    <BaseText style={[{ fontSize: 28, fontWeight: '700',}, style]} {...restProps}>
        {children}
    </BaseText>
);


export const H2 = ({ style, children, ...restProps }: TextProp) => (
    <BaseText style={[{ fontSize: 24, fontWeight: 'bold' }, style]} {...restProps}>
        {children}
    </BaseText>
);

export const H3 = ({ style, children, ...restProps }: TextProp) => (
    <BaseText style={[{ fontSize: 22, fontWeight: '700' }, style]} {...restProps}>
        {children}
    </BaseText>
);

export const H4 = ({ style, children, ...restProps }: TextProp) => (
    <BaseText style={[{ fontSize: 20, fontWeight: '600' }, style]} {...restProps}>
        {children}
    </BaseText>
);

export const H5 = ({ style, children, ...restProps }: TextProp) => (
    <BaseText style={[{ fontSize: 18, fontWeight: '500' }, style]} {...restProps}>
        {children}
    </BaseText>
);

export const H6 = ({ style, children, ...restProps }: TextProp) => (
    <BaseText style={[{ fontSize: 16, fontWeight: '400' }, style]} {...restProps}>
        {children}
    </BaseText>
);