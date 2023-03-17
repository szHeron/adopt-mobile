import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    animalContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#EBEBEB',
      width: '100%',
      height: 172,
      padding: 16,
      borderRadius: 16,
      marginBottom: 18
    },
    contentInfo: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      width: '55%'
    },
    animalImg: {
      height: '100%',
      width: '42%',
      borderRadius: 16,
      marginRight: 16
    },
    contentIcons: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    localization: {
      flexDirection: 'row', 
      maxWidth: '60%', 
      alignItems: 'center'
    },
    textName: {
      fontWeight: '600',
      fontSize: 18,
      color: '#000'
    },
    textRace: {
      fontWeight: '400',
      fontSize: 16,
      color: '#424242'
    }, 
    textOtherInfos: {
      fontWeight: '300',
      fontSize: 15,
      color: '#A5A5A5'
    }
})
