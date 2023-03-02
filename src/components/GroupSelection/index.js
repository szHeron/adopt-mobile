import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export function GroupSelection(props){
    function handleSelect(value){
        if(props.propKey == 'type')
            props.setNewAnimal({...props.newAnimal, type: value })
        else if(props.propKey == 'gender')
            props.setNewAnimal({...props.newAnimal, gender: value })
        else
            props.setNewAnimal({...props.newAnimal, age: value })
    }

    return(
        <View style={styles.container}>
            {
                props.newAnimal[props.propKey] == props.values[0]?
                (
                    <>
                        <View style={styles.selectedBox}>
                            <Text style={styles.selectedText}>{props.values[0]}</Text>
                        </View>
                        <TouchableOpacity onPress={()=>handleSelect(props.values[1])} style={styles.unselectedBox}>
                            <Text style={styles.unselectText}>{props.values[1]}</Text>
                        </TouchableOpacity>
                    </>
                ):
                (
                    <>
                        <TouchableOpacity onPress={()=>handleSelect(props.values[0])} style={styles.unselectedBox}>
                            <Text style={styles.unselectText}>{props.values[0]}</Text>
                        </TouchableOpacity>
                        <View style={styles.selectedBox}>
                            <Text style={styles.selectedText}>{props.values[1]}</Text>
                        </View>
                    </>
                )
            }
        </View>
    )
}