import { FlatList } from 'react-native';
import { RenderAnimal } from '../RenderAnimal'

export function AnimalsList(props){
    return (
        <FlatList
            data={props.data}
            renderItem={({item})=>{
                return(
                    <RenderAnimal item={props.favorited?item.animal:item} favoriteId={props.favorited && item.id} id={props.user.id} handleFavorited={props.handleFavorited}/>
                )
            }}
            style={{height: '60%'}}
            contentContainerStyle={{ paddingBottom: 42}}
            keyExtractor={(item) => item.id}
            numColumns={1}
        />
    )
}