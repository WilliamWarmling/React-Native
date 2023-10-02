import { StyleSheet, Button, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
export default function Home({ navigation }) {
    return (
        <Animatable.View
            animation="slideInLeft"
            duration={1000}
            style={styles.container}
        >
            <Text>Veja coisas sobre mim</Text>
            <Button title='Sobre mim' onPress={() => navigation.navigate('Sobre')}>Sobre mim</Button>
            <Button title='Meu time' onPress={() => navigation.navigate('Time')}>Meu time</Button>
            <Button title='Sobre minha escola' onPress={() => navigation.navigate('Escola')}>Minha escola</Button>
            <Button title='Meu carro' onPress={() => navigation.navigate('Carro')}>Carro que eu considero bonito</Button>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    }
});