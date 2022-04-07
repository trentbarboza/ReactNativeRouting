import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import LoginScreen from './Screens/LoginScreen';

type RootStackParamList = {
  Home: undefined;
  Profile: { name: string };
  Login: {name: string}
}


const Stack = createNativeStackNavigator<RootStackParamList>();

const App: FC = () => {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Login'
        component={LoginScreen} />

      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{ title: 'Welcome' }} />

      <Stack.Screen name='Profile'
        component={ProfileScreen} />

    </Stack.Navigator>
  </NavigationContainer>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;