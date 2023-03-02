import { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { AnimalsList } from '../../components/AnimalsList'
import useAuth from '../../hooks/useAuth'
import api from '../../services/api';
import { styles } from './styles';


export function AnimalsFavorited(){
    const { user } = useAuth()
    const [favorites, setFavorites] = useState([])
    const [loading, setLoading] = useState(true)
    const isFocused = useIsFocused()

    async function GetAllFavorites(){
        try{
            setLoading(true)
            const response = await api.get('/favorite', {
                params: {
                    userId: user.id
                }
            })
            setFavorites(response.data)
            setLoading(false)
        }catch(e){
            console.log(e)
        }finally{
            if(user){
                setLoading(false)
            }
        }
    }

    useEffect(()=>{
        GetAllFavorites()
    }, [isFocused])

    async function handleFavorited(isFavorited, animalId, id){
        if(isFavorited){
            await api.delete(`/favorite/${id}`)
            GetAllFavorites()
        }else{
            await api.post(`/favorite/`,{
                userId: user.id,
                animalId: animalId
            })
            GetAllFavorites()
        }
    }

    if(loading)
        return <ActivityIndicator size='large'/>

    return (
        <View style={styles.container}>
            <Text style={styles.favoriteTitle}>Favoritos</Text>
            <View style={styles.content}>
                <AnimalsList favorited data={favorites} user={user} handleFavorited={handleFavorited}/>
            </View>
        </View>   
    )
}