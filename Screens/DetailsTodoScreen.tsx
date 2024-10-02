import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, "DetailsTodo">;


export default function DetailsTodoScreen(){
    
    return(
         <Text>
            DetailsTodoScreen
        </Text>
    )
}