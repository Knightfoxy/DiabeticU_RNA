import { StyleSheet } from 'react-native';
import metrics from '../../themes/metrics';

export default StyleSheet.create({
    touchableSeperatorBg: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialTouchables: {
        flex: 1,
        height: 55,
        borderRadius: 16,
        borderColor: '#E7EBF3',
        borderWidth: 1,
        marginHorizontal: 6,
    },
    socialIcons: {
        resizeMode: 'center',
        width: 22,
        height: 22,
    },
});
