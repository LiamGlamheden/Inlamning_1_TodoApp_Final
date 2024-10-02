import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import { RootStackParamList } from '../App';
import { todos } from '../data';
import CreateTodoScreen from './CreateTodoScreen';

type TodoListProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
};

type SimpleTodo = {
  id: string;
  title: string;
  description?: string;
  createDate?: Date;
  deadLine?: Date;
  done?: boolean;
};

const TodoList = ({ navigation }: TodoListProps) => {
  const renderItem = ({ item }: { item: SimpleTodo }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
      <Text>{item.title}</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate("DetailsTodo", {
            id: item.id,
            title: item.title,
            description: item.description,
            createDate: item.createDate,
            deadLine: item.deadLine,
            done: item.done,
          })
        }
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

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Todos' },
    { key: 'second', title: 'Create Todo' },
  ]);

  const renderScene = SceneMap({
    first: () => <TodoList navigation={navigation} />, 
    second: CreateTodoScreen,
  });

  return (
    <View style={{ flex: 1 }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: 300 }}
      />
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
  title: {
    color: 'black',
  },
});
