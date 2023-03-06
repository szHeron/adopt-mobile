import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export function RenderAnimal({ item, favoriteId, id, handleFavorited }){
    const navigation = useNavigation()
    const isFavorited = item["Favorites"]?item["Favorites"].find(favorite => favorite.userId === id):{userId: null}

    return (
        <TouchableOpacity onPress={()=>navigation.navigate('viewAnimal', {item: item})} style={styles.animalContainer}>
            <Image source={{uri: item.image}} style={styles.animalImg}/>
            <View style={styles.contentInfo}>
                <Text style={styles.textName}>{item.name}</Text>
                <View>
                    <Text style={styles.textRace}>{item.race}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.textOtherInfos}>{item.age}, </Text>
                        <Text style={styles.textOtherInfos}>{item.type}</Text>
                    </View>
                    <Text style={styles.textOtherInfos}>{item.gender}</Text>
                </View>
                <View style={styles.contentIcons}>
                    <View style={styles.localization}>
                        <MaterialCommunityIcons name='map-marker-outline' style={{marginStart: -10}} size={30} color='#D6AC1A'/>
                        <Text style={{flexWrap: 'wrap', color: '#A5A5A5'}}>{item.city}, {item.state}</Text>
                    </View>
                    <TouchableOpacity onPress={()=>handleFavorited(isFavorited, item.id, favoriteId)}>
                        {
                            isFavorited?(
                                <MaterialIcons name='favorite' color='#FF4F4F' size={30}/>
                            ):(
                                <MaterialIcons name='favorite-outline' color='#A5A5A5' size={30}/>
                            )
                        }
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};