import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../App';
import { todos } from '../data';

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

type SimpleTodo = {
  id: string;
  title: string;
};


export default function HomeScreen({ navigation }: Props) {
  const [selectedId, setSelectedId] = useState<string>();

 const renderItem = ({ item }: { item: SimpleTodo }) => {
  return (
    <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
      <Text>{item.title}</Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate("DetailsTodo", { id: item.id })}
        />
    </View>
    
  );
  
};

  
    return(
        <View>
             <Text>
                 HomeScreen
            </Text>
                <FlatList
                data={todos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
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
  title: {
    color: 'black',
  }
});
