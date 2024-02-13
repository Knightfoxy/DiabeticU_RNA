import { StyleSheet } from 'react-native';
import metrics from '../../themes/metrics';

export default StyleSheet.create({
    rootContainer: {
        width: metrics.screenWidth - 60,
        flexDirection: 'row',
        height: 25,
        top: 5,
    },
    imageContainer: {
        height: 16,
        width: 14,
        marginLeft: 15,
        marginRight: 15,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    contentContainer: {
        alignItems: 'center',
        width: metrics.screenWidth,
    },
    title: {
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'left',
        width: metrics.screenWidth,
    }
}); 