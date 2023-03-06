import { useState } from 'react';
import { View, Image, Text } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { MaterialIcons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import api from '../../services/api';
import useAuth from '../../hooks/useAuth'
import { styles } from './styles'

export function ViewAnimal(){
    const { user } = useAuth()
    const route = useRoute()
    const navigation = useNavigation()
    const { item } = route.params
    const [favorite, setFavorite] = useState(item.Favorites.find(item => item.userId === user.id))

    async function handleFavorited(){
        if(favorite){
            await api.delete(`/favorite/${favorite.id}`)
            setFavorite(false)
        }else{
            const response = await api.post(`/favorite/`,{
                userId: user.id,
                animalId: item.id
            })
            setFavorite(response.data)
        }
    }

    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: item.image}}/>
            <AntDesign style={styles.navigationBack} onPress={()=>navigation.goBack()} name='arrowleft' size={32} color='black' />
            <View style={styles.infos}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.textName}>
                        {item.name}
                    </Text>
                    {
                        favorite?(
                            <MaterialIcons onPress={handleFavorited} style={styles.likeButton} name='favorite' color='#FF4F4F' size={32}/>
                        ):(
                            <MaterialIcons onPress={handleFavorited} style={styles.likeButton} name='favorite-outline' color='#A5A5A5' size={32}/>
                        )
                    }
                </View>
                <Text style={styles.textRace}>
                    {item.race}
                </Text>
                <Text style={styles.textOtherInfos}>
                    {item.age}, {item.gender}
                </Text>
                <View style={{flexDirection: 'row', marginTop: 18, alignItems: 'center'}}>
                    <MaterialCommunityIcons name='map-marker-outline' style={{marginStart: -10}} size={32} color='#D6AC1A'/>
                    <Text style={styles.textCity}>{item.city}, </Text>
                    <Text style={styles.textState}>{item.state}</Text>
                </View>
                <View style={styles.owner}>
                    <Image source={{uri: item.createdBy.avatar}} style={styles.ownerAvatar}/>
                    <View>
                        <Text style={styles.textOwnerName}>
                            {item.createdBy.name}
                        </Text>
                        <Text style={styles.textOwnerInfo}>
                            Dono
                        </Text>
                    </View>
                </View>
                <Text style={styles.textContact}>Contatos</Text>
                <View style={styles.contactItem}>
                    <MaterialCommunityIcons name='email-outline' style={{backgroundColor: '#FFBABA', padding: 4, borderRadius: 8}} size={32} color='#FF4F4F'/>
                    <Text style={styles.textLabel}>Email: {item.createdBy.email}</Text>
                </View>
                <View style={styles.contactItem}>
                    <MaterialCommunityIcons name='phone-outline' style={{backgroundColor: '#BAFFC1', padding: 4, borderRadius: 8}} size={32} color='#4FFF60'/>
                    <Text style={styles.textLabel}>Telefone/Whatsapp: {item.createdBy.numberContact?item.createdBy.numberContact:'Não possui'}</Text>
                </View>
            </View>
        </View>
    )
}