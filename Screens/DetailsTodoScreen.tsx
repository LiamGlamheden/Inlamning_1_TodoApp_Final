import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, View, StyleSheet } from 'react-native';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, "DetailsTodo">;

export default function DetailsTodoScreen({ route }: Props) {
    const { id, title, description, createDate, deadLine, done } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo Details</Text>
            <Text style={styles.label}>Todo ID:</Text>
            <Text style={styles.value}>{id}</Text>
            <Text style={styles.label}>Todo Title:</Text>
            <Text style={styles.value}>{title}</Text>
            <Text style={styles.label}>Todo Description:</Text>
            <Text style={styles.value}>{description}</Text>
            <Text style={styles.label}>Created At:</Text>
            <Text style={styles.value}>{createDate?.toString()}</Text>
            <Text style={styles.label}>Deadline:</Text>
            <Text style={styles.value}>{deadLine?.toString()}</Text>
            <Text style={styles.label}>Done:</Text>
            <Text style={styles.value}>{done ? 'Yes' : 'No'}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginVertical: 5,
    },
    value: {
        fontSize: 16,
        marginBottom: 15,
        color: '#333',
    },
});
