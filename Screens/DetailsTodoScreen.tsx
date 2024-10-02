import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, "DetailsTodo">;


export default function DetailsTodoScreen({ route }: Props) {
    const { id, title, description, createDate, deadLine, done } = route.params;

    return(
      <View>
        <Text>DetailsTodoScreen</Text>
        <Text>Task ID: {route.params.id}</Text>
        <Text>Task Title: {route.params.title}</Text>
        <Text>Task Description: {route.params.description}</Text>
        <Text>Created At: {route.params.createDate?.toString()}</Text>
        <Text>Deadline: {route.params.deadLine?.toString()}</Text>
        <Text>Done: {route.params.done ? 'Yes' : 'No'}</Text>
    </View>

    )
}