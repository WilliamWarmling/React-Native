import { StyleSheet, Text, View } from "react-native";

export default function Sobre() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Sobre mim</Text>
            <Text>Meu nome é Willian</Text>
            <Text>Tenho 19 anos</Text>
            <Text>Estou no 3° ano do ensino médio</Text>
            <Text>Adoro carros</Text>
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