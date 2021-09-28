import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../pages/Home'
import { Tarefa } from '../pages/Tarefa'

const stack = createNativeStackNavigator()
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <stack.Navigator screenOptions={{headerShown: false}}>
          <stack.Screen name="Home" component={Home} />
          <stack.Screen name="Tarefa" component={Tarefa} />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}