import { createContext, useState, useEffect } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../services/firebase';
import { storeToken } from '../utils/AsyncToken';
import api from '../services/api';

export const AuthContext = createContext({});

export function AuthContextProvider(props){
  const [user, setUser] = useState(null);

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if(user){
        if(user.uid){
          const token = await user.getIdToken()
          await storeToken(token)
          const userData = await getUser(user.uid, token);
          setUser({
            ...userData
          });
        }
      }
    },(error)=>{
      console.log(error)
    })
    return()=>{
      unsubscribe();
    }
  },[])

  async function signOutAccount(){
    try{
      signOut(auth)
    }catch(error){
      throw new Error(error);
    }
  }

  async function signInWithEmailAndPasswordFirebase(email, password){
    try{
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user

      if(!user){
        throw new Error("Usuario não existe, cadastre-o primeiro!");
      }else{
        const token = await user.getIdToken()
        await storeToken(token)
        const userData = await getUser(user.uid, token)
        setUser({...userData, id: user.uid})
      }
    }catch(error){
      throw new Error(error);
    }
  }

  async function signUpWithEmailAndPasswordFirebase(email, password, name){
    try{
      const response = await createUserWithEmailAndPassword(auth, email, password)
      const token = await response.user.getIdToken()
      await storeToken(token)
      registerNewUser(response.user.uid, name, email, token)
    }catch(error){
      throw new Error(error);
    }
  }  

  async function getUser(id, token){
    try{
      const response = await api.get(`/users/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if(response.data) {
        return response.data
      } else {
        throw new Error("Não foi possível encontrar o usuário");
      }
    }catch(error){
      throw new Error(error.message);
    }
  }

  async function registerNewUser(id, name, email, token){
    try{
      await api.post(`/users/register`, {
        id: id, 
        name: name, 
        email: email
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      setUser({id: id, name: name, email: email})
    }catch(error){
      console.log(error)
      throw new Error(error);
    }
  }

  return(
    <AuthContext.Provider value={{user, signInWithEmailAndPasswordFirebase, signUpWithEmailAndPasswordFirebase, signOutAccount}}>
      {props.children}
    </AuthContext.Provider>            
  )
}