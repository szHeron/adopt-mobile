import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: Dimensions.get('window').height + 300,
        backgroundColor: '#fff',
    },
    header: {
        justifyContent: 'center',
        width: '100%',
        height: '12%',
        backgroundColor: '#FAF2AF',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        paddingLeft: 16
    },
    headerContent:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%'
    },
    form: {
        width: '100%',
        padding: 16
    },
    blankImage: {
        height: '15%',
        width: '50%',
        backgroundColor: '#EBEBEB',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    localizatonForm: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    localizationInputContent: {
        width: '45%'
    },
    titleHeader: {
        fontSize: 20,
        fontWeight: '600',
        width: '80%',
        textAlign: 'center'
    },
    label: {
        fontSize: 15,
        fontWeight: '400',
        marginBottom: 4,
        marginTop: 16
    }
})