import { StyleSheet, Text, Image, View } from "react-native";
import * as Animatable from 'react-native-animatable';

export default function Time() {
    return (
        <Animatable.View
            animation="bounce"
            duration={1000}
            style={styles.container}
        >
            <Text style={styles.titulo}>Meu time do coração</Text>
            <Image source={require('./assets/time.png')} style={styles.image} />

        </Animatable.View>
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
        width: 150,
        height: 200,
    }
});