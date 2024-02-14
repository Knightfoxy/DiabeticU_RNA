import { StyleSheet } from 'react-native';
import metrics from '../../../themes/metrics';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
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
    tryInsteadStyle: {
        marginTop: 15,
        marginHorizontal: 30,
        height: 30,
        flexDirection: 'row'
    },
    loginTouchableTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
    },
    tryInsteadTitle: {
        marginLeft: 10,
        color: '#7F879A',
        fontSize: 16,
        fontWeight: '400',
    },
    suggestedUsernameTitle: {
        color: '#000080',
        fontSize: 16,
        fontWeight: '600',
    },
    loginTouchable: {
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
    countryCodeImg: {
        marginLeft: 5,
        marginRight: 4,
        height: 18,
        width: 18,
        borderRadius: 4,
        justifyContent: 'center',
        alignSelf: 'center',
        borderColor: '#E7EBF3',
        flexDirection: 'row'
    },
    countryCodeText: {
        marginTop: 5,
        height: 19,
        fontWeight: '400',
        color: '#9CA0AB',
        marginHorizontal: 4,
        alignSelf: 'center',
        borderColor: '#E7EBF3',
        flexDirection: 'row',
        textAlign: 'center',
    },
    termstouse: {
        marginTop: 5,
        height: 19,
        fontWeight: '400',
        color: '#000080',
        marginHorizontal: 4,
        alignSelf: 'center',
        borderColor: '#E7EBF3',
        flexDirection: 'row',
        textAlign: 'center',
    },
    socialTouchables: {
        height: 28,
        borderColor: '#E7EBF3',
        marginHorizontal: 6,
        borderRadius: 4,
    },
    contactText: {
        marginHorizontal: 30,
        fontSize: 16,
        fontWeight: '500',
        color: '#7B8293',
        marginBottom: 12,
    },

});
