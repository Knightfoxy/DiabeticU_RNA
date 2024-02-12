import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    textInputStyle: {
        marginTop: 10,
        marginHorizontal: 30,
        backgroundColor: 'white',
        marginBottom: 40,
        height: 60,
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
