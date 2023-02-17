import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home'
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';

const Stack = createNativeStackNavigator();

export function Route(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="signIn" component={SignIn}/>
            <Stack.Screen name="signUp" component={SignUp}/>
            <Stack.Screen name="home" component={Home}/>
        </Stack.Navigator>
    )
}