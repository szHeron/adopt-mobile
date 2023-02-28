import { View, Text } from 'react-native';
import { DefaultButton } from '../../components/DefaultButton';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';

export function Profile(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>
            <FontAwesome name='user-circle' size={156} color='#A5A5A5' />
            <Text style={styles.textName}>Heron Rodrigues</Text>
            <Text style={styles.textAccount}>
                Conta
            </Text>
            <View style={styles.content}>
                <View>
                    <Text style={styles.textPlaceholder}>Nome</Text>
                    <Text style={styles.textValue}>Heron Rodrigues de Oliveira</Text>
                </View>
                <View>
                    <Text style={styles.textPlaceholder}>Email</Text>
                    <Text style={styles.textValue}>Heronbr7@gmail.com</Text>
                </View>
                <View>
                    <Text style={styles.textPlaceholder}>Telefone</Text>
                    <Text style={styles.textValue}>(88)993721091</Text>
                </View>
            </View>
            <DefaultButton style={{width: '50%'}}>
                <Text>
                    Editar
                </Text>
            </DefaultButton>
        </View>   
    )
}