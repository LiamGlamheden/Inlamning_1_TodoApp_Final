import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Button, FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../App';
import { SimpleTodo, todos as initialTodos } from '../data';

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
      {image ? (
        <ImageBackground
          source={{ uri: image }} 
          resizeMode="cover"
          style={styles.image}
        >
          <TodoList navigation={navigation} todos={todos} />
        </ImageBackground>
      ) : (
        <View style={styles.noImageContainer}>
          <TodoList navigation={navigation} todos={todos} />
        </View>
      )}
      
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
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  noImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
