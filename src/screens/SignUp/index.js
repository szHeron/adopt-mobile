import { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../../hooks/useAuth'
import { DefaultInput } from '../../components/DefaultInput'
import { DefaultButton } from '../../components/DefaultButton'
import { OtherConnections } from '../../components/OtherConnections';
import { styles } from './styles'

export function SignUp(){
    const [newUser, setNewUser] = useState({name: '', email: '', password: '', confirmPassword: ''})
    const [error, setError] = useState({errorName: '', errorEmail: '', errorPassword: '', errorConfirm: ''})
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation()
    const { signUpWithEmailAndPasswordFirebase } = useAuth()

    async function handleRegister(){
        if(newUser.name && newUser.password && newUser.email){
            if(newUser.password === newUser.confirmPassword){
                setLoading(true)
                try {
                    await signUpWithEmailAndPasswordFirebase(newUser.email, newUser.password, newUser.name)
                    navigation.navigate("homeTabs")
                }catch(e) {
                    setError(e.message)
                }
            }else{
                setError({...error, errorConfirm: 'Preencha todos os campos.'})
            }
        }else{
            setError({...error, errorConfirm: 'Preencha todos os campos.'})
        }
        setLoading(false)
    }

    return (
        <KeyboardAvoidingView style={{ backgroundColor: '#fff'}} >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.textContent}>
                    <Text style={styles.title}>Cadastrar</Text>
                    <Text style={styles.subTitle}>Crie uma conta nova</Text>
                </View>
                <View style={styles.inputContent}>
                    <DefaultInput
                        placeholder='Nome'
                        value={newUser.name}
                        onChangeText={text => setNewUser({...newUser, name: text})}
                        error={error.errorName}
                    />
                    <DefaultInput
                        placeholder='Email'
                        value={newUser.email}
                        onChangeText={text => setNewUser({...newUser, email: text})}
                        error={error.errorEmail}
                    />
                    <DefaultInput
                        placeholder='Senha'
                        value={newUser.password}
                        type='password'
                        onChangeText={text => setNewUser({...newUser, password: text})}
                        error={error.errorPassword}
                    />
                    <DefaultInput
                        placeholder='Confirme sua senha'
                        value={newUser.confirmPassword}
                        type='password'
                        onChangeText={text => setNewUser({...newUser, confirmPassword: text})}
                        error={error.errorConfirm}
                    />
                </View>
                <DefaultButton onPress={handleRegister}>
                    <Text style={{color: '#424242', fontSize: 18, fontWeight: 'bold'}}>Cadastrar</Text>
                </DefaultButton>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 12}}>
                    <View style={styles.line}/>
                    <Text style={styles.subTitle}>
                        Ou
                    </Text>
                    <View style={styles.line}/>
                </View>
                <OtherConnections/>
                <TouchableOpacity onPress={()=>navigation.goBack()} style={[styles.mixedText, {alignSelf: 'center'}]}>
                    <Text>Já possui uma conta? </Text><Text style={{color: "#D6AC1A"}}>Entre aqui</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}