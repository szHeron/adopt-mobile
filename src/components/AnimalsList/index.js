import { FlatList, View, Text, Image } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles';

const renderAnimal = ({ item }) => {
    return (
        <View style={styles.animalContainer}>
            <Image source={{uri: item.image}} style={styles.animalImg}/>
            <View style={styles.contentInfo}>
                <Text style={styles.textName}>{item.name}</Text>
                <View>
                    <Text style={styles.textRace}>{item.race}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.textAge}>{item.age}, </Text>
                        <Text style={styles.textAge}>{item.type}</Text>
                    </View>
                </View>
                <View style={styles.contentIcons}>
                    <View style={styles.localization}>
                        <MaterialCommunityIcons name="map-marker-outline" style={{marginStart: -10}} size={30} color='#D6AC1A'/>
                        <Text style={{flexWrap: 'wrap', color: '#A5A5A5'}}>Centro</Text>
                    </View>
                    <MaterialIcons name='favorite-outline' color='#A5A5A5' size={30}/>
                </View>
            </View>
        </View>
    );
};

export function AnimalsList(props){

    return (
        <FlatList
            data={props.data}
            renderItem={renderAnimal}
            keyExtractor={(item) => item.id}
            numColumns={1}
        />
    )
}