import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Quiz from '../screens/Quiz';
import Result from '../screens/Result';
import Login from './../screens/Login';
import Register from './../screens/Register';



const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer 
    >
      <Stack.Navigator>
      {/* <Stack.Screen name="Login" component={Login} options={{headerShown:false}} /> */}
      {/* <Stack.Screen name="Register" component={Register} options={{headerShown:false}} /> */}
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Quiz" component={Quiz} options={{headerShown:false}}/>
        <Stack.Screen name="Result" component={Result} options={{headerShown:false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;