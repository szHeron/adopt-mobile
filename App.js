import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContextProvider } from './src/context/AuthContext';
import { Route } from './src/routes/route'

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Route/>
        <StatusBar backgroundColor='transparent'/>
      </NavigationContainer>
    </AuthContextProvider>
  );
}
