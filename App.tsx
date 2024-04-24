import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState, useCallback } from "react";
import { Home } from './src/pages/Home';
import { AddNewTask } from './src/pages/AddNewTask';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ParamListVavigate } from './src/types';

export default function App() {
  const Stack = createNativeStackNavigator<ParamListVavigate>();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{title: 'Задачи'}}
          />
          <Stack.Screen 
            name="AddTask" 
            component={AddNewTask} 
            options={{title: 'Новая задача'}} 
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
