import { useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import useAuth from '../../hooks/useAuth'
import api from "../../services/api";
import { AnimalsList } from "../../components/AnimalsList";
import { HomeFilters } from "../../components/HomeFilters";
import { HomeHeader } from "../../components/HomeHeader";
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

    useEffect(()=>{
        async function GetAllAnimals(){
            try{
                setLoading(true)
                const response = await api.get('/animal', {
                    params: filters
                })
                setAnimals(response.data)
                setLoading(false)
            }catch(e){
                console.log(e)
                setLoading(false)
            }
        }
        GetAllAnimals()
    }, [filters])


    return (
        <View style={styles.container}>
            <HomeHeader/>
            <View style={styles.content}>
                <HomeFilters filters={filters} setFilters={setFilters} displayValue={displayValue} setDisplayValue={setDisplayValue}/>
                {loading?(
                    <ActivityIndicator size='large'/>
                ):(
                    <AnimalsList data={animals}/>
                )}
            </View>
        </View>   
    )
}