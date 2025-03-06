import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyMusic from './src/modules/screens/MyMusic';
import Song from './src/modules/screens/Song';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Playlist" component={MyMusic} />
        <Stack.Screen name="Player" component={Song} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}