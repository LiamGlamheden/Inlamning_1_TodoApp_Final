import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import CreateTodoScreen from "./Screens/CreateTodoScreen";
import DetailsTodoScreen from "./Screens/DetailsTodoScreen";
import HomeScreen from "./Screens/HomeScreen";

export type RootStackParamList = {
  Home: undefined;
  DetailsTodo: { 
    id: string; 
    title: string; 
    description?: string; 
    createDate?: Date; 
    deadLine?: Date; 
    done?: boolean; 
  };  CreateTodo: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
      <NavigationContainer>
      <StatusBar style="auto" />
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="DetailsTodo" component={DetailsTodoScreen} />
        <RootStack.Screen name="CreateTodo" component={CreateTodoScreen} />

      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
