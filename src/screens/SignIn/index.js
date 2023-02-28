import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DefaultInput } from '../../components/DefaultInput'
import { DefaultButton } from '../../components/DefaultButton'
import { OtherConnections } from '../../components/OtherConnections';
import useAuth from '../../hooks/useAuth'
import { styles } from './styles'

export function SignIn(){
    const [signInUser, setSignInUser] = useState({email:'', password:''})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation()
    const { signInWithEmailAndPasswordFirebase, user } = useAuth()

    async function handleLogin(){
        if(signInUser.email && signInUser.password){
            setLoading(true)
            try {
                await signInWithEmailAndPasswordFirebase(signInUser.email, signInUser.password)
                navigation.navigate('homeTabs')
            }catch(e) {
                setError(e.message)
            }
        }else{
            setError('Insira o email e senha!')
        }
        setLoading(false)
    }

    useEffect(()=>{
        if(user !== null){
            navigation.navigate('homeTabs') 
        }
    },[user])

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
                        value={signInUser.email}
                        onChangeText={text => setSignInUser({...signInUser, email: text})}
                    />
                    <DefaultInput
                        placeholder='Senha'
                        value={signInUser.password}
                        secureTextEntry={true}
                        onChangeText={text => setSignInUser({...signInUser, password: text})}
                    />
                </View>
                {error&&<Text style={styles.errorText}>Insira o email e senha.</Text>}
                <View style={styles.mixedText}>
                    <Text>Esqueceu a senha? </Text><Text style={{color: "#D6AC1A"}}>Entre aqui</Text>
                </View>
                <DefaultButton onPress={handleLogin}>
                    Entrar
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