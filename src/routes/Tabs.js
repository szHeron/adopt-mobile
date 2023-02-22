import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Home } from '../screens/Home'
import { Profile } from '../screens/Profile';
import { Favorite } from '../screens/Favorites';

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = '';
          if (route.name === 'home') {
            iconName = 'home';
          } else if (route.name === 'favorite') {
            iconName = 'favorite-outline';
          } else if (route.name === 'profile') {
            iconName = 'user';
          }
          return iconName == 'favorite-outline'?
            <MaterialIcons name={iconName} style={{paddingBottom: 4, borderBottomColor: focused?'#D6AC1A':'#fff', borderBottomWidth: 1}} color={focused?'#D6AC1A':'#000'} size={30}/>
            :
            <AntDesign name={iconName} style={{paddingBottom: 4, borderBottomColor: focused?'#D6AC1A':'#fff', borderBottomWidth: 1}} color={focused?'#D6AC1A':'#000'} size={30}/>;
        },
        tabBarShowLabel: false,
        headerShown: false
      })}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="favorite" component={Favorite} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
}