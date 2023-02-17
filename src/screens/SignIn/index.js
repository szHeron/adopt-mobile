import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DefaultInput } from '../../components/DefaultInput'
import { DefaultButton } from '../../components/DefaultButton'
import { styles } from './styles'

export function SignIn(){
    const [text, setText] = useState("");
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.textContent}>
                <Text style={styles.title}>Entrar</Text>
                <Text style={styles.subTitle}>Bem-vindo de volta</Text>
            </View>
            <View style={styles.inputContent}>
                <DefaultInput
                    placeholder='Email'
                    value={text}
                    onChangeText={text => setText(text)}
                />
                <DefaultInput
                    placeholder='Senha'
                    value={text}
                    onChangeText={text => setText(text)}
                />
            </View>
            <View style={styles.mixedText}>
                <Text>Esqueceu a senha? </Text><Text style={{color: "#D6AC1A"}}>Entre aqui</Text>
            </View>
            <DefaultButton>
                <Text style={{color: '#424242', fontSize: 18}}>Entrar</Text>
            </DefaultButton>
            <Text style={styles.subTitle}>
                Ou
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('signUp')} style={[styles.mixedText, {alignSelf: 'center'}]}>
                <Text>Não possui uma conta? </Text><Text style={{color: "#D6AC1A"}}>Crie uma</Text>
            </TouchableOpacity>
        </View>   
    )
}