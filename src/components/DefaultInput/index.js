import { TextInput } from 'react-native';
import { styles } from './styles';

export function DefaultInput(props){
    return (
        <TextInput
            style={styles.container}
            placeholderTextColor='#A5A5A5'
            {...props}
        />
    )
}