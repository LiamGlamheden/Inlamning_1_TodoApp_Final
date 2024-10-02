import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, "DetailsTodo">;


export default function DetailsTodoScreen({ route }: Props) {
      const { id, title } = route.params

    return(
        <View>

            <Text>
                DetailsTodoScreen
            </Text>
            <Text> Task: {route.params.title}</Text>
            
        </View>
        
    )
}