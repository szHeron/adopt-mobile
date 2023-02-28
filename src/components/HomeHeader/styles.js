import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#FAF2AF',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '100%',
        height: '20%',
        paddingBottom: 32,
        paddingHorizontal: 32,
        borderBottomEndRadius: 24,
        borderBottomStartRadius: 32,
    },
    userImage: {
        width: 52,
        height: 52,
        borderRadius: 50
    },
    localizationContent: {
        flexDirection:'row',
        justifyContent:'flex-start',
        gap: 3
    },
    textLocalization: {
        color: '#797979',
        fontSize: 16
    },
    textCity: {
        color: '#000000',
        fontSize: 24,
        fontWeight: 'bold',
        marginRight: 8
    },
    textState: {
        color: '#424242',
        fontSize: 24,
        fontWeight: 'bold'
    }
})