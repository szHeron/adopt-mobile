import { TouchableOpacity } from 'react-native';
import { styles } from './styles';

export function DefaultButton(props){
    return (
        <TouchableOpacity
            style={styles.container}
            {...props}
        >
            {props.children}
        </TouchableOpacity>
    )
}