import AsyncStorage from '@react-native-async-storage/async-storage'

export async function storeToken(token){
    try {
        await AsyncStorage.setItem('@token', token)
    } catch (e) {
        console.log(e, 'error ao salvar token')
    }
}


export async function getToken(){
    try {
        const token = await AsyncStorage.getItem('@token')

        return token
    } catch (e) {
        console.log(e, 'error ao salvar token')
    }
}