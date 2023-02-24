import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles';

export function RenderAnimal({ item, id, handleFavorited }){
    const isFavorited = item["Favorites"]?item["Favorites"].find(favorite => favorite.userId === id):{userId: null}

    return (
        <View style={styles.animalContainer}>
            <Image source={{uri: item.image}} style={styles.animalImg}/>
            <View style={styles.contentInfo}>
                <Text style={styles.textName}>{item.name}</Text>
                <View>
                    <Text style={styles.textRace}>{item.race}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.textOtherInfos}>{item.age}, </Text>
                        <Text style={styles.textOtherInfos}>{item.type}</Text>
                    </View>
                    <Text style={styles.textOtherInfos}>{item.gender?'Masculino':'Feminino'}</Text>
                </View>
                <View style={styles.contentIcons}>
                    <View style={styles.localization}>
                        <MaterialCommunityIcons name='map-marker-outline' style={{marginStart: -10}} size={30} color='#D6AC1A'/>
                        <Text style={{flexWrap: 'wrap', color: '#A5A5A5'}}>Centro</Text>
                    </View>
                    <TouchableOpacity onPress={()=>handleFavorited(isFavorited, item.id)}>
                        {
                            isFavorited?(
                                <MaterialIcons name='favorite' color='red' size={30}/>
                            ):(
                                <MaterialIcons name='favorite-outline' color='#A5A5A5' size={30}/>
                            )
                        }
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};