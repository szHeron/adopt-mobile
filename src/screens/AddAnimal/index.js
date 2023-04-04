import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { DefaultInput } from '../../components/DefaultInput'
import { DefaultButton } from '../../components/DefaultButton'
import { GroupSelection } from '../../components/GroupSelection';
import useAuth from '../../hooks/useAuth'
import api from '../../services/api'
import { styles } from './styles';

export function AddAnimal(){
    const [newAnimal, setNewAnimal] = useState({name: '', race: '', type: 'Gato', age: 'Filhote', image: '', gender: 'Masculino', idade: 'Filhote', city: '', state: ''})
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation()
    const { user } = useAuth()
    const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
    
    async function pickImage(){
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if(!result.canceled) {
            setNewAnimal({...newAnimal, image: result.assets[0]});
        }
    }

    async function handleCreateNewPost(){
        if(newAnimal.name.length > 3 && newAnimal.race.length > 3 && newAnimal.city.length > 3){
            setLoading(true)
            if(newAnimal.image.uri){
                const formData = new FormData();
                formData.append('photo', {
                    uri: newAnimal.image.uri,
                    type: 'image/jpeg',
                    name: 'file.jpg'
                })

                try{
                    const response = await api.post('/uploadImage', formData, {
                        headers: {
                        'Content-Type': 'multipart/form-data',
                        },
                    })
                    await api.post('/animal', {...newAnimal, userId: user.id, image: response.data.url})
                    navigation.goBack()
                }catch(error){
                    console.error(error)
                }
            }else{
                await api.post('/animal', {...newAnimal, userId: user.id, image: ''})
            }
            setLoading(false)
        }
    }

    return (
        <KeyboardAvoidingView style={{ backgroundColor: '#fff'}} >
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <AntDesign onPress={()=>navigation.goBack()} name='arrowleft' size={32} color='black' />
                        <Text style={styles.titleHeader}>Adicionar novo animal para adoção</Text>
                    </View>
                </View>
                <View style={styles.form}>
                    <Text style={styles.label}>Imagem</Text>
                    <TouchableOpacity onPress={pickImage} style={styles.blankImage}>
                        {
                            newAnimal.image?<Image source={{ uri: newAnimal.image.uri }} style={{ width: '100%', height: '100%' }}/>:<AntDesign name='plus' size={64} color='#fff'/>
                        }
                    </TouchableOpacity>
                    <Text style={styles.label}>Nome</Text>
                    <DefaultInput                         
                        placeholder='Nome do animal'
                        value={newAnimal.name}
                        onChangeText={text => setNewAnimal({...newAnimal, name: text})}
                    />
                    <Text style={styles.label}>Raça</Text>
                    <DefaultInput                         
                        placeholder='Raça do animal'
                        value={newAnimal.race}
                        onChangeText={text => setNewAnimal({...newAnimal, race: text})}
                    />
                    <View style={styles.localizatonForm}>
                        <View style={styles.localizationInputContent}>
                            <Text style={styles.label}>Cidade</Text>
                            <DefaultInput                         
                                placeholder='Cidade'
                                value={newAnimal.city}
                                onChangeText={text => setNewAnimal({...newAnimal, city: text})}
                            />
                        </View>
                        <View style={styles.localizationInputContent}>
                            <Text style={styles.label}>Estado</Text>
                            <View style={{borderColor: '#A5A5A5', borderWidth: 1, borderRadius: 12, padding: 3}}>
                                <Picker
                                    selectedValue={newAnimal.state}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setNewAnimal({...newAnimal, state: itemValue})
                                 }>
                                    {states.map((item)=>{
                                        return (
                                            <Picker.Item key={item} label={item} value={item} />
                                        )
                                    })}
                                </Picker>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.label}>Tipo</Text>
                    <GroupSelection values={['Gato', 'Cachorro']} setNewAnimal={setNewAnimal} newAnimal={newAnimal} propKey='type'/>
                    <Text style={styles.label}>Genero</Text>
                    <GroupSelection values={['Masculino', 'Feminino']} setNewAnimal={setNewAnimal} newAnimal={newAnimal} propKey='gender'/>
                    <Text style={styles.label}>Idade</Text>
                    <GroupSelection values={['Filhote', 'Adulto']} setNewAnimal={setNewAnimal} newAnimal={newAnimal} propKey='age'/>
                    <DefaultButton disabled={loading} onPress={handleCreateNewPost} style={{width: '50%', alignSelf: 'center', marginVertical: 16}}>
                        {loading?<ActivityIndicator/>:'Criar'}
                    </DefaultButton>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
