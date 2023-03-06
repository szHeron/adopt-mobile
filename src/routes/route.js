import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigation } from './Tabs'
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { AddAnimal } from '../screens/AddAnimal';
import { ViewAnimal } from '../screens/ViewAnimal';

const Stack = createNativeStackNavigator();

export function Route(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="signIn" component={SignIn}/>
            <Stack.Screen name="signUp" component={SignUp}/>
            <Stack.Screen name="homeTabs" component={TabNavigation}/>
            <Stack.Screen name="addAnimal" component={AddAnimal}/>
            <Stack.Screen name="viewAnimal" component={ViewAnimal}/>
        </Stack.Navigator>
    )
}