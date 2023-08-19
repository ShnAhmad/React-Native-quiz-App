import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text, TouchableOpacity, View } from 'react-native';
import Routes from './Navigation/Routes';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Result from './screens/Result';

export default function App() {
  return (

     <Routes/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
