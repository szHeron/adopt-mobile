import { FlatList } from 'react-native';
import { RenderAnimal } from '../RenderAnimal'

export function AnimalsList(props){
    return (
        <FlatList
            data={props.data}
            renderItem={({item})=>{
                return(
                    <RenderAnimal item={props.favorited?item.animal:item} id={props.user.id} handleFavorited={props.handleFavorited}/>
                )
            }}
            keyExtractor={(item) => item.id}
            numColumns={1}
        />
    )
}