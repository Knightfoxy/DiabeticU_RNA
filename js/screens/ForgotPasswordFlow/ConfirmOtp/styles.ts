import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    textInputStyle: {
        backgroundColor: 'white',
        flex: 1,
        marginHorizontal: 10,
        height: 60,
        textAlign: 'center',
    },
    loginTouchableTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
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
        marginTop: 40, 
    },
    contactText: {
        marginHorizontal: 30,
        fontSize: 16,
        fontWeight: '500',
        color: '#7B8293',
        marginBottom: 12,
    },
    signupTouchableTitle: {
        color: '#FF00A6',
        fontSize: 14,
        fontWeight: '500',
    },
    signupTouchable: {
        marginTop: 15,
        marginLeft: 30,
        height: 30,
        width: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white'
    },
});
