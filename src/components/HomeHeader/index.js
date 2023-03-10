import { View, Image, Text } from 'react-native';
import { styles } from './styles';

export function HomeHeader({user}){

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.localizationContent}>
                    <Text style={styles.textLocalization}>Localização</Text> 
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textCity}>Palhano,</Text>
                    <Text style={styles.textState}>Ceará</Text>
                </View>
            </View>
            <Image style={styles.userImage} source={{uri: user?user.avatar:'https://res.cloudinary.com/dx30jwecr/image/upload/v1676127196/Posts/ifosarfdte26wakso1ok.jpg'}}/>
        </View>
    )
}