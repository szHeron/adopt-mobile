import { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DefaultInput } from '../../components/DefaultInput'
import { DefaultButton } from '../../components/DefaultButton'
import { OtherConnections } from '../../components/OtherConnections';
import useAuth from '../../hooks/useAuth'
import { styles } from './styles'

export function SignIn(){
    const [user, setUser] = useState({email:'', password:''})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation()
    const { signInWithEmailAndPasswordFirebase } = useAuth()

    async function handleLogin(){
        if(user.email && user.password){
            setLoading(true)
            try {
                //await signInWithEmailAndPasswordFirebase(user.email, user.password)
                navigation.navigate("home")
            }catch(e) {
                setError(e.message)
            }
        }else{
            setError('Insira o email e senha!')
        }
        setLoading(false)
    }

    return (
        <KeyboardAvoidingView style={{ backgroundColor: '#fff'}}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.textContent}>
                    <Text style={styles.title}>Entrar</Text>
                    <Text style={styles.subTitle}>Bem-vindo de volta</Text>
                </View>
                <View style={styles.inputContent}>
                    <DefaultInput
                        placeholder='Email'
                        value={user.email}
                        onChangeText={text => setUser({...user, email: text})}
                    />
                    <DefaultInput
                        placeholder='Senha'
                        value={user.password}
                        onChangeText={text => setUser({...user, password: text})}
                    />
                </View>
                {error&&<Text style={styles.errorText}>Insira o email e senha.</Text>}
                <View style={styles.mixedText}>
                    <Text>Esqueceu a senha? </Text><Text style={{color: "#D6AC1A"}}>Entre aqui</Text>
                </View>
                <DefaultButton onPress={handleLogin}>
                    <Text style={{color: '#424242', fontSize: 18, fontWeight: 'bold'}}>Entrar</Text>
                </DefaultButton>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 12}}>
                    <View style={styles.line}/>
                    <Text style={styles.subTitle}>
                        Ou
                    </Text>
                    <View style={styles.line}/>
                </View>
                <OtherConnections/>
                <TouchableOpacity onPress={()=>navigation.navigate('signUp')} style={[styles.mixedText, {alignSelf: 'center'}]}>
                    <Text>Não possui uma conta? </Text><Text style={{color: "#D6AC1A"}}>Crie uma</Text>
                </TouchableOpacity>
            </ScrollView>   
        </KeyboardAvoidingView>
    )
}