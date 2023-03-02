import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    unselectedBox: {
        alignItems: 'center',
        width: '46%',
        borderColor: '#FED43D',
        borderWidth: 1,
        padding: 16,
        borderRadius: 10
    },
    selectedBox: {
        alignItems: 'center',
        width: '46%',
        backgroundColor: '#FED43D',
        padding: 16,
        borderRadius: 10
    },
    unselectText: {
        fontSize: 15,
        fontWeight: '500'
    },
    selectedText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#fff'
    }
})