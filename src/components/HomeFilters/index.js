import { useCallback } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Cat from '../../../assets/cat.png'
import Dog from '../../../assets/dog.png'
import { styles } from './styles';

export function HomeFilters({filters, setFilters, displayValue, setDisplayValue}){
    const debounce = (func) => {
        let timer;
        return function(...args){
            const context = this;
            if(timer) clearTimeout(timer);
            timer = setTimeout(()=>{
                timer = null;
                func.apply(context, args)
            }, 3000)
        }
    }

    const handleChange = (text) => {
        setFilters({...filters, name: text});
    }

    const handler = useCallback(debounce(handleChange, 3000), []);

    function handleSetFilter(typeOfFilter){
        if(typeOfFilter == 'otherFilters'){

        }else{
            filters.type == typeOfFilter?setFilters({type: null}):setFilters({type: typeOfFilter})
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchBarWithIcon}>
                <AntDesign name='search1' size={24} color='#A5A5A5'/>        
                <TextInput value={displayValue} onChangeText={(text)=>{setDisplayValue(text);handler(text)}} placeholder='Pesquisar' style={styles.searchBar}/>
            </View>
            <View style={styles.filter}>
                <TouchableOpacity style={styles.filterItem}>
                    <AntDesign style={styles.filterIcon} name="filter" size={32} color="#D6AC1A" />
                    <Text style={styles.textFilter}>Filtros</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>handleSetFilter('Gato')} style={styles.filterItem}>
                    <View style={filters.type=='Gato'?styles.filterImageSelected:styles.filterImage}>
                        <Image source={Cat}/>
                    </View>
                    <Text style={styles.textFilter}>Gato</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>handleSetFilter('Cachorro')} style={styles.filterItem}>
                    <View style={filters.type=='Cachorro'?styles.filterImageSelected:styles.filterImage}>
                        <Image source={Dog}/>
                    </View>
                    <Text style={styles.textFilter}>Cachorro</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}