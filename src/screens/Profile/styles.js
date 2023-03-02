import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    content: {
        width: '90%',
        backgroundColor: '#fff',
        padding: 24,
        borderRadius: 8,
        marginBottom: 16
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        margin: 52
    },
    textName: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: 8
    },
    textAccount:{
        color: '#A5A5A5',
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 4,
        marginLeft: 18,
        alignSelf: 'flex-start'
    },
    textPlaceholder: {
        color: '#A5A5A5',
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 4
    },
    textValue: {
        color: '#000',
        fontSize: 15,
        fontWeight: '700',
        marginBottom: 16,
        paddingBottom: 8,
        borderBottomColor: '#A5A5A5',
        borderBottomWidth: 1
    },
    textLogout: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 24
    }
})