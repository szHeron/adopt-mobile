import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
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
        height: '24%'
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 20,
        fontWeight: '300'
    }
})