import React from 'react'; // Se debe de importar React
import { createStackNavigator } from '@react-navigation/stack'; // Stack Navigator
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';


const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false, // para no mostrar el header que tiene por defecto
          cardStyle: { // Configuraciones de estilo para las pantallas
            backgroundColor: 'white'
          }
        }}
    > 
      <Stack.Screen name="HomeScreen" component={HomeScreen} /> 
      <Stack.Screen name="DetailScreen" component={DetailScreen} /> 
    </Stack.Navigator>
  );
}
