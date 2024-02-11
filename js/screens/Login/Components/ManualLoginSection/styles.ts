import { StyleSheet } from 'react-native';
import metrics from '../../../../themes/metrics';

export default StyleSheet.create({
    textInputStyle: {
        marginTop: 10,
        marginHorizontal: 30,
        backgroundColor: 'white',
        marginBottom: (metrics.screenWidth / 100),
        height: 60,
    },
    forgotTapStyle: {
        fontSize: 14,
        fontWeight: '400',
        color: '#0B152D',
        textAlign: 'left',
    },
    forgotTouchable: {
        alignSelf: 'flex-end',
        width: 150,
        height: 30,
        marginTop: 10,
    },
    countryCodeView: {
        flex: 1,
        marginLeft: 30,
        height: 60,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#E7EBF3',
        flexDirection: 'row',
        overflow: 'hidden',
    },
    countryCodeImg: {
        marginLeft: 5,
        height: 22,
        width: 22,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 11,
        borderWidth: 1,
        borderColor: '#E7EBF3',
        flexDirection: 'row'
    },
    countryCodeText: {
        fontWeight: '500',
        color: '#0B152D',
        marginHorizontal: 4,
        alignSelf: 'center',
        borderColor: '#E7EBF3',
        flexDirection: 'row',
        textAlign: 'center',
    },
    countryCodeChevronImg: {
        alignSelf: 'center',
        borderColor: '#E7EBF3',
        flexDirection: 'row',
        resizeMode: 'center',
    },




    h1: {
        fontWeight: '700',
        fontSize: 28,
        color: '#0B152D',
        marginLeft: 30,
    },
    h5: {
        width: metrics.screenWidth - 60,
        fontWeight: '400',
        color: '#9CA0AB',
        marginLeft: 30,
    },
    textInputStyle: {
        marginTop: 10,
        marginHorizontal: 30,
        backgroundColor: 'white',
        marginBottom: (metrics.screenWidth / 100),
        height: 60,
    },
    forgotTapStyle: {
        fontSize: 14,
        fontWeight: '400',
        color: '#0B152D',
        textAlign: 'left',
    },
    forgotTouchable: {
        alignSelf: 'flex-end',
        width: 150,
        height: 30,
        marginTop: 10,
    },
    loginTouchableTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700'
    },
    loginTouchable: {
        color: 'white',
        borderColor: '#DCDCDC',
        borderRadius: 16,
        height: 60,
        backgroundColor: '#000080',
        borderWidth: 1,
        fontWeight: '600',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
    },
    touchableSignupBg: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signupTouchableTitle: {
        color: '#FF00A6',
        fontSize: 14,
        fontWeight: '500',
    },
    signupTouchable: {
        height: 30,
        width: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white'
    },
    touchableSeperatorBg: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialIcons: {
        resizeMode: 'center',
        width: 22,
        height: 22,
    },
    socialTouchables: {
        flex: 1,
        height: 55,
        borderRadius: 16,
        borderColor: '#E7EBF3',
        borderWidth: 1,
        marginHorizontal: 6,
    },
    biometricimg: {
        flex: 1,
        alignItems: 'flex-end',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    biometricText: {
        color: '#000080',
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'left',

    }
});
