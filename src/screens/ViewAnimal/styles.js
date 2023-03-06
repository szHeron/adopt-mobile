import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    image: {
        width: '100%',
        height: '40%'
    },
    navigationBack: {
        position: 'absolute',
        left: '5%',
        top: '5%',
        backgroundColor: '#FAF2AF',
        padding: 4,
        borderRadius: 10
    },
    likeButton: {
        backgroundColor: '#FAF2AF',
        padding: 4,
        borderRadius: 10
    },
    infos: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        padding: 18
    },
    textName: {
        fontWeight: '700',
        fontSize: 26,
        color: '#000'
    },
    textRace: {
        fontWeight: '400',
        fontSize: 18,
        color: '#424242',
        marginTop: 18
    },    
    textOtherInfos: {
        fontWeight: '300',
        fontSize: 16,
        color: '#A5A5A5',
    },
    textCity: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 4
    },
    textState: {
        color: '#424242',
        fontSize: 18,
        fontWeight: 'bold'
    },
    owner: {
        flexDirection: 'row', 
        marginVertical: 18, 
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        padding: 8,
        borderRadius: 10
    },
    ownerAvatar: {
        width: 60,
        height: 60,
        borderRadius: 100,
        marginRight: 12
    },
    textOwnerName: {
        color: '#000',
        fontSize: 15,
        fontWeight: '700'
    },
    textOwnerInfo: {
        color: '#A5A5A5',
        fontSize: 13,
        fontWeight: '500'
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4
    },
    textContact: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8
    },
    textLabel: {
        color: '#000',
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 8
    }
})