import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, "CreateTodo">;


export default function CreateTodoScreen(){
    return(
         <Text>
            CreateTodoScreen
        </Text>
    )
}