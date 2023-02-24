import { useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { AnimalsList } from "../../components/AnimalsList";
import { HomeFilters } from "../../components/HomeFilters";
import { HomeHeader } from "../../components/HomeHeader";
import useAuth from '../../hooks/useAuth'
import api from "../../services/api";
import { styles } from "./styles";

export function Home(){
    const { user } = useAuth()
    const [animals, setAnimals] = useState([])
    const [filters, setFilters] = useState({
        age: null,
        name: null,
        gender: null,
        type: null
    })
    const [displayValue, setDisplayValue] = useState('')
    const [loading, setLoading] = useState(true)

    async function GetAllAnimals(){
        try{
            setLoading(true)
            const response = await api.get('/animal', {
                params: filters
            })
            setAnimals(response.data)
        }catch(e){
            console.log(e)
        }finally{
            if(user){
                setLoading(false)
            }
        }
    }

    useEffect(()=>{
        GetAllAnimals()
    }, [filters])

    async function handleFavorited(isFavorited, animalId){
        if(isFavorited){
            await api.delete(`/favorite/${animalId}`)
            GetAllAnimals()
        }else{
            await api.post(`/favorite/`,{
                userId: user.id,
                animalId: animalId
            })
            GetAllAnimals()
        }
    }

    return (
        <View style={styles.container}>
            <HomeHeader/>
            <View style={styles.content}>
                <HomeFilters filters={filters} setFilters={setFilters} displayValue={displayValue} setDisplayValue={setDisplayValue}/>
                {loading?(
                    <ActivityIndicator size='large'/>
                ):(
                    <AnimalsList data={animals} user={user} handleFavorited={handleFavorited}/>
                )}
            </View>
        </View>   
    )
}