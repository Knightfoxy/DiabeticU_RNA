import { StyleSheet } from 'react-native';
import metrics from '../../../themes/metrics';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    backTouchable: {
        backgroundColor: '#F6F6F6',
        width: 48,
        height: 48,
        borderRadius: 16,
        marginLeft: 30,
        marginTop: 10,

    },
    rowContainer: {
        width: metrics.screenWidth - 60,
        marginHorizontal: 30,
        marginTop: 20
    },
    backImageStyle: {
        resizeMode: 'contain',
        width: 10,
        height: 18,
    },
    descriptionText: {
        marginLeft: 30,
        marginRight: 14,
        marginTop: 8,
        fontSize: 14,
        color: '#9CA0AB'
    },

    credTypeTouchableBg: {
        backgroundColor: '#F6F9FA',
        flex: 1,
        borderRadius: 16,

    },
    credTypeImg: {
        marginLeft: 16,
        marginTop: 30,
        aspectRatio: 1 / 1,
    },
    credsHeading: {
        marginLeft: 12,
        fontWeight: '500',
        marginTop: 20,
        fontSize: 14,
    },
    textInputStyle: {
        marginTop: 10,
        marginHorizontal: 30,
        backgroundColor: 'white',
        height: 60,
    },
    loginTouchableTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
    },
    loginTouchable: {
        marginTop: 40,
        color: 'white',
        borderColor: '#DCDCDC',
        borderRadius: 16,
        height: 60,
        backgroundColor: '#000080',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
        shadowColor: '#7575BA',
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },
    inputError: {
        borderColor: 'red',
        borderWidth: 1,
    },

});
