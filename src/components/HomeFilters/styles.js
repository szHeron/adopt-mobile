import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginBottom: 18
    },
    searchBarWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EBEBEB',
        borderRadius: 12,
        padding: 16,
    },
    searchBar: {
        width: '80%',
        marginLeft: 8,
        backgroundColor: '#EBEBEB',
        color: '#A5A5A5'
    },
    filter: {
        flexDirection: 'row',
    },
    filterItem: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 16,
        marginRight: 16
    },
    filterIcon: {
        backgroundColor: '#FAF2AF',
        padding: 16,
        borderRadius: 8,
    },
    filterImage: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAF2AF',
        height: 64,
        width: 64,
        borderRadius: 12
    },
    filterImageSelected: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FED43D',
        height: 64,
        width: 64,
        borderRadius: 12
    },
    textFilter: {
        color: '#797979',
        fontWeight: '500',
        fontSize: 16
    }
})