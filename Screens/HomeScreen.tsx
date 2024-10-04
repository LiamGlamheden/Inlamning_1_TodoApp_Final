import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import React, { useEffect, useRef, useState } from 'react';
import { Button, FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { captureRef } from 'react-native-view-shot';
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
  const [todos, setTodos] = useState<SimpleTodo[]>(initialTodos); 
  const [image, setImage] = useState<string | null>(null); 
  const imageRef = useRef<View>(null); 

  const [mediaLibraryPermission, requestPermission] = MediaLibrary.usePermissions();

  useEffect(() => {
    if (!mediaLibraryPermission?.granted) {
      requestPermission();
    }
  }, [mediaLibraryPermission]);

  const pickImage = () => {
    ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    })
    .then((result) => {
      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    })
    .catch((e) => {
      console.log(e);
    });
  };

  const onSaveImageAsync = () => {
    if (imageRef.current) {
      captureRef(imageRef.current, {
        height: 440,
        quality: 1,
        format: 'png',
      })
      .then((localUri) => {
        return MediaLibrary.saveToLibraryAsync(localUri);
      })
      .then(() => {
        alert('Screenshot saved!');
      })
      .catch((e) => {
        console.log(e);
      });
    } else {
      console.log("imageRef is null or not assigned correctly.");
    }
  };

  const handleCreateTodo = (newTodo: SimpleTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }} ref={imageRef} collapsable={false} >
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
      </View>
      
      <Button
        title="Create Todo"
        onPress={() => navigation.navigate('CreateTodo', { onCreate: handleCreateTodo })}
      />
      <Button
        title='Set background'
        onPress={pickImage}
      />
      <Button
        title='Take Screenshot'
        onPress={onSaveImageAsync}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: '100%',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9', 
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  noImageContainer: {
    flex: 1,
    justifyContent: 'center',
    
  },
});