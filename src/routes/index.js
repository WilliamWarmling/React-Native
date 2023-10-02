import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home';
import Carro from '../pages/carro';
import Escola from '../pages/escola';
import Sobre from '../pages/sobre';
import Time from '../pages/time';

export default function Routes() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Time" component={Time} />
            <Stack.Screen name="Carro" component={Carro} />
            <Stack.Screen name="Sobre" component={Sobre} />
            <Stack.Screen name="Escola" component={Escola} />
        </Stack.Navigator>
    );

}