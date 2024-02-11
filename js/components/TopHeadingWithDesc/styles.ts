import { StyleSheet } from 'react-native';
import metrics from '../../themes/metrics';

export default StyleSheet.create({
    rootContainer: {
        borderRadius: 2,
        paddingVertical: 5,
        flex: 1,
        alignItems: 'center',
        top: 10,
    },
    imageContainer: {
        flex: 0.9,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    contentContainer: {
        alignItems: 'center',
        width: metrics.screenWidth,
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
        height: 40,
        width: metrics.screenWidth,
    },
    descriptionText: {
        fontSize: 16,
        marginHorizontal: 40,
        fontWeight: '400',
        textAlign: 'center',
        height: 40,
    },
});
