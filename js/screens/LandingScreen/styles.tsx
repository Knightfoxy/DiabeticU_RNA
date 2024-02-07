import { StyleSheet } from 'react-native';
import metrics from '../../themes/metrics';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    headingImg: {
        width: metrics.screenWidth - 160,
        height: undefined,
        aspectRatio: 350 / 100,
    },
    pageControlBg: {
        width: metrics.screenWidth,
        flex: 1,
        
    },
    pageControlImage: {
        width: metrics.screenWidth,
    },
    pageControl: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: metrics.screenWidth,
        marginBottom: 40,
    },
    socialButtonBg: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: metrics.screenWidth,
    },
    mediaTouchable: {
        borderColor: '#DCDCDC',
        borderRadius: 16,
        height: 60,
        width: metrics.screenWidth - 60,
        backgroundColor: 'white',
        borderWidth: 1,
        fontWeight: '600',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mediaTouchableTitle: {
        color: '#60647C',
        fontSize: 16,
        fontWeight: '500'
    },
    loginTouchable: {
        color: 'white',
        borderColor: '#DCDCDC',
        borderRadius: 16,
        height: 60,
        width: metrics.screenWidth - 60,
        backgroundColor: '#000080',
        borderWidth: 1,
        fontWeight: '600',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginTouchableTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700'
    },
    touchableSeperatorBg: {
        height: 50,
        width: metrics.screenWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signupTouchable: {
        height: 30,
        width: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white'
    },
    signupTouchableTitle: {
        color: '#FF00A6',
        fontSize: 14,
        fontWeight: '500',
    },
    bottomModal: {
        position: 'absolute',
        backgroundColor: 'white',
        width: '100%',
        height: metrics.screenHeight / 2.1,
        bottom: 0,
        borderRadius: 35,
    },
    socialHeading: {
        marginBottom: 32,
        color: '#0B152D',
    },
    socialIcons: {
        aspectRatio: 70 / 70,
        marginLeft: 0,

    },
    socialMediaTouchable: {
        borderRadius: 16,
        height: 80,
        width: metrics.screenWidth - 60,
        backgroundColor: '#F6F9FA',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    socialloginTouchableTitle: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 36,
    },
});