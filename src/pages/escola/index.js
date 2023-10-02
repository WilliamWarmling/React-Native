import { View, Text, StyleSheet } from "react-native";

export default function Escola() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Escola</Text>
            <Text>Faço parte da Escola Sesi</Text>
            <Text>Estou no terceiro ano do Ensino Médio</Text>
            <Text>Estou na Turna 3C</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        color: 'blue',
        marginTop: -100,
        margin: 30,
        fontSize: 20
    }
});