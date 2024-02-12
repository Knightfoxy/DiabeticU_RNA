import React from 'react';
import { View, Text, Image } from 'react-native';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { ImageName } from '../../assets';

const toastConfig = {

    success: (props) => (
        <BaseToast
            {...props}
            style={{ borderLeftColor: 'pink' }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
                fontSize: 15,
                fontWeight: '400'
            }}
        />
    ),

    error: (props) => (
        <ErrorToast
            {...props}
            text1Style={{
                fontSize: 17
            }}
            text2Style={{
                fontSize: 15
            }}
        />
    ),

    tomatoToast: ({ text1, text2 }) => (
        <View style={{
            height: '100%', width: '85%',
            backgroundColor: '#ED0909',
            borderRadius: 20,
            shadowColor: '#F03737',
            shadowOffset: { width: 1, height: 3 },
            shadowOpacity: 0.4,
            shadowRadius: 3,
            elevation: 5,
            overflow: 'hidden',
            flexDirection: 'row'
        }}>
            <Image source={ImageName.errorPopupImg} style={[{ width: 24, height: 70, marginLeft: 18, resizeMode: 'contain' }]}></Image>
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={{
                    marginTop: 8,
                    flex: 1,
                    marginLeft: 15,
                    fontSize: 16,
                    fontWeight: '700',
                    color: 'white',

                }}>{text1}</Text>
                <Text style={{
                    flex: 1.5,
                    marginLeft: 15,
                    fontSize: 14,
                    fontWeight: '400',
                    color: 'white',
                }}>{text2}</Text>
            </View>
        </View>
    )
};

export default toastConfig;