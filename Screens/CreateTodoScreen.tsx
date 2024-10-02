import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, "CreateTodo">;


export default function CreateTodoScreen(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadLine, setDeadLine] = useState('');

    const handleSubmit = () => {
        const newTodo = {
            id: Date.now().toString(), // Exempel på ID
            createDate: new Date(),
            title,
            description,
            deadLine: new Date(deadLine),
            done: false,
        };
        console.log('New Todo:', newTodo);
    };
    return(
        <View>
            <Text>
                CreateTodoScreen
            </Text>

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
    )
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
  },
  title: {
    color: 'black',
  },
});
