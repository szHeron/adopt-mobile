import { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DefaultInput } from '../../components/DefaultInput'
import { DefaultButton } from '../../components/DefaultButton'
import { styles } from './styles'

export function SignUp(){
    const [text, setText] = useState("")
    const navigation = useNavigation()

    return (
        <KeyboardAvoidingView  style={{ backgroundColor: '#fff'}} >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.textContent}>
                    <Text style={styles.title}>Cadastrar</Text>
                    <Text style={styles.subTitle}>Crie uma conta nova</Text>
                </View>
                <View style={styles.inputContent}>
                    <DefaultInput
                        placeholder='Nome'
                        value={text}
                        onChangeText={text => setText(text)}
                    />
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
                    <DefaultInput
                        placeholder='Confirme sua senha'
                        value={text}
                        onChangeText={text => setText(text)}
                    />
                </View>
                <DefaultButton>
                    <Text style={{color: '#424242', fontSize: 18}}>Entrar</Text>
                </DefaultButton>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={styles.line}/>
                    <Text style={styles.subTitle}>
                        Ou
                    </Text>
                    <View style={styles.line}/>
                </View>
                <TouchableOpacity onPress={()=>navigation.goBack()} style={[styles.mixedText, {alignSelf: 'center'}]}>
                    <Text>Já possui uma conta? </Text><Text style={{color: "#D6AC1A"}}>Entre aqui</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}