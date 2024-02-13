import { StyleSheet } from 'react-native';
import metrics from '../../themes/metrics';

export default StyleSheet.create({
    textInputStyle: {
        flex: 2,
        marginTop: 10,
        marginRight: 30,
        marginLeft: 10,
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
    validationOptions: {
        flex: 1,
        height: 138,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 16,
        flexDirection: 'row',
        overflow: 'hidden',
    },
});
