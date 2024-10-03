import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { RootStackParamList } from '../App';
import { SimpleTodo } from '../data';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

type Props = NativeStackScreenProps<RootStackParamList, "CreateTodo">;

export default function CreateTodoScreen({ route, navigation }: Props) {
  const { onCreate } = route.params; 
  const [title, setTitle] = useState<string>(''); 
  const [description, setDescription] = useState<string>(''); 
  const [deadLine, setDeadLine] = useState<string>(''); 

  const handleSubmit = () => {
    const newTodo: SimpleTodo = {
      id: Date.now().toString(),
      createDate: new Date(),
      title,
      description,
      deadLine: new Date(deadLine), 
      done: false,
    };

    Notifications.scheduleNotificationAsync({
      content: {
        title: "Todo added", 
        body: 'En till Todo har skapats', 
      },
      trigger: null, 
    });

    onCreate(newTodo); 
    setTitle('');
    setDescription('');
    setDeadLine('');
  };

  return (
    <View style={styles.container}>
      <Text>Create Todo</Text>
      <TextInput
        style={styles.input}
        placeholder="Task name"
        onChangeText={setTitle}
        value={title}
      />
      <TextInput
        style={styles.input}
        placeholder="Task description"
        onChangeText={setDescription}
        value={description}
      />
      <TextInput
        style={styles.input}
        placeholder="Deadline (YYYY-MM-DD)"
        onChangeText={setDeadLine}
        value={deadLine}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%', 
  },
});
