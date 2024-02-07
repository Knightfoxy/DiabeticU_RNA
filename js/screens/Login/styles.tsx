import { StyleSheet } from 'react-native';
import metrics from '../../themes/metrics';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    loginAppIcon: {
        width: 52,
        height: 60,
        resizeMode: 'contain',
        marginTop: 25,
        marginLeft: 30,
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
        width: 140,
        height: 30,
        borderColor: 'white',
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
        alignItems : 'flex-end',
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
