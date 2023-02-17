import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: 800,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    textContent: {
        alignItems: 'center',
        marginBottom: 26
    },
    mixedText: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginBottom: 28
    },
    inputContent: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '44%'
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 20,
        fontWeight: '300'
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#A5A5A5',
        marginHorizontal: 10
    }
})