import { View } from "react-native";
import { AnimalsList } from "../../components/AnimalsList";
import { HomeFilters } from "../../components/HomeFilters";
import { HomeHeader } from "../../components/HomeHeader";
import { styles } from "./styles";

export function Home(){
    const animals = [
        {id: 1, name: 'Juliana', race: 'Golden Retriever', type: 'Cachorro', age: 'Adulto', gender: 0, image: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'},
        {id: 2, name: 'Juliana', race: 'Golden Retriever', type: 'Cachorro', age: 'Adulto', gender: 0, image: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'},
        {id: 3, name: 'Juliana', race: 'Golden Retriever', type: 'Cachorro', age: 'Adulto', gender: 0, image: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'},
        {id: 5, name: 'Juliana', race: 'Golden Retriever', type: 'Cachorro', age: 'Adulto', gender: 0, image: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'}
    ]
    return (
        <View style={styles.container}>
            <HomeHeader/>
            <View style={styles.content}>
                <HomeFilters/>
                <AnimalsList data={animals}/>
            </View>
        </View>   
    )
}