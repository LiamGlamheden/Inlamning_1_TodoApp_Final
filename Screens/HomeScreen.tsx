import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../App';
import { SimpleTodo, todos as initialTodos } from '../data';
import * as ImagePicker from 'expo-image-picker';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


const TodoList = ({ navigation, todos }: { navigation: Props['navigation'], todos: SimpleTodo[] }) => {
  const renderItem = ({ item }: { item: SimpleTodo }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
      <Button
        title="View Details"
        onPress={() => navigation.navigate('DetailsTodo', { ...item })}
      />
    </View>
  );

  return (
    <FlatList
      data={todos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default function HomeScreen({ navigation }: Props) {

    const [expoPushToken, setExpoPushToken] = useState('');

    const [todos, setTodos] = useState<SimpleTodo[]>(initialTodos); 
    const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const handleCreateTodo = (newTodo: SimpleTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <View style={{ flex: 1 }}>
      <TodoList navigation={navigation} todos={todos} />
      <Button
        title="Create Todo"
        onPress={() => navigation.navigate('CreateTodo', { onCreate: handleCreateTodo })}
      />
      <Button
       title='Set background'
       onPress={pickImage}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});
