import { View, Text, TextInput, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Cat from '../../../assets/cat.png'
import Dog from '../../../assets/dog.png'
import { styles } from './styles';

export function HomeFilters(){
    return (
        <View style={styles.container}>
            <View style={styles.searchBarWithIcon}>
                <AntDesign name="search1" size={24} color='#A5A5A5'/>        
                <TextInput placeholder='Pesquisar' style={styles.searchBar}/>
            </View>
            <View style={styles.filter}>
                <View style={styles.filterItem}>
                    <AntDesign style={styles.filterIcon} name="filter" size={32} color="#D6AC1A" />
                </View>
                <View style={styles.filterItem}>
                    <View style={styles.filterImage}>
                        <Image source={Cat}/>
                    </View>
                    <Text style={styles.textFilter}>Gato</Text>
                </View>
                <View style={styles.filterItem}>
                    <View style={styles.filterImage}>
                        <Image source={Dog} />
                    </View>
                    <Text style={styles.textFilter}>Cachorro</Text>
                </View>
            </View>
        </View>
    )
}