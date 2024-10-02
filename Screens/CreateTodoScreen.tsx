import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, TextComponent, TextInput, View } from 'react-native';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, "CreateTodo">;


export default function CreateTodoScreen(){
     const [text, onChangeText] = React.useState('');
     const [number, onChangeNumber] = React.useState('');
    return(
        <View>
            <Text>
                CreateTodoScreen
            </Text>

            <TextInput
             style={styles.input}
            placeholder="Task name"
            onChangeText={onChangeText}
            value={text}
            />

            <TextInput
             style={styles.input}
            placeholder="Task description"
            onChangeText={onChangeText}
            value={text}
            />

            <TextInput
             style={styles.input}
            placeholder="DeadLine?"
            onChangeText={onChangeText}
            value={text}
            />

          


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
