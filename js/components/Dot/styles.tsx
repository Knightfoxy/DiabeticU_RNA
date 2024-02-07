import { StyleSheet } from 'react-native';
import metrics from '../../themes/metrics';

export default StyleSheet.create({
  rootContainer: {
        height: 8,
        flexDirection: 'row',
        width: 8,
        borderRadius: 4,
    },
    imageContainer: {
        aspectRatio: 115/100,
        width: metrics.screenWidth,
        resizeMode: 'cover',
        backgroundColor: '#F6F9FA'
    },
    contentContainer: {
        alignItems: 'center',
        flex: 1,
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
        fontWeight: '400',
        textAlign: 'center',
        height: 40,
        width: metrics.screenWidth,
    },
});
