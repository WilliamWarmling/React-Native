import { StyleSheet, Image, View, Text } from "react-native";

export default function Carro() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Carro que eu acho bonito</Text>
            <Image source={require('./assets/corsa.png')} style={styles.image} />
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
        margin: 20,
        fontSize: 20
    },
    image: {
        width: 250,
        height: 200,
    }
});