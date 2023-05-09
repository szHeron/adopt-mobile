import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export function DefaultButton(props){
    return (
        <TouchableOpacity
            {...props}
            style={[styles.container, props.style]}
        >
            <Text style={{color: '#424242', fontWeight: 'bold', fontSize: 18}}>
                {props.children}
            </Text>
        </TouchableOpacity>
    )
}
