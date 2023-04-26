import { View, Image } from 'react-native'
import google from '../../../assets/google.png'
import facebook from '../../../assets/facebook.png'
import twitter from '../../../assets/twitter.png'
import { styles } from './styles'

export function OtherConnections(){
    return (
        <View style={styles.container}>
            <Image source={google}/>
            <Image source={facebook}/>
            <Image source={twitter}/>
        </View>
    )
}
