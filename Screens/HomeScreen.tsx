import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../App';
import { SimpleTodo, todos as initialTodos } from '../data'; // Import initial todos
import CreateTodoScreen from './CreateTodoScreen';

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
  const [todos, setTodos] = useState<SimpleTodo[]>(initialTodos); // Initialize with imported todos

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
