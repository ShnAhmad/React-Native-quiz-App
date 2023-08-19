import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, TouchableOpacity, View, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import LottieView from 'lottie-react-native';
import { useState } from 'react';

export default function Home({ navigation }) {

  const [category, setCategory] = useState('CS');
  const [level, setLevel] = useState('Easy');

  return (
    <ImageBackground source={require("../assets/tt.jpg")} style={styles.container}>

    
      <LottieView source={require("../assets/quiz.json")}
           style={{ width:370, height: 200, borderRadius: 10 }}
        autoPlay />


      <Text style={{ marginBottom: 20, marginTop: 20, color: "white", fontSize: 15 }}>Select subject</Text>

      <View style={styles.pickercontainer}>
        <Picker
          dropdownIconColor="white"
          selectedValue={category}
          style={styles.pickerstyle} mode={"dialog"}
          onValueChange={(itemValue) => setCategory(itemValue)}>
          <Picker.Item label="General Knowledge" value="GN" />
          <Picker.Item label="Computer Science" value="CS" />
          <Picker.Item label="Mathematics" value="MT" />
          <Picker.Item label="History" value="HT" />
          <Picker.Item label="Sports" value="SP" />
          <Picker.Item label="Politics" value="PO" />
          <Picker.Item label="Science and Nature" value="SN" />
        </Picker>
      </View>
      <Text style={{ marginBottom: 20, color: "white", fontSize: 15 }}>Select Level</Text>

      <View style={styles.pickercontainer}>
        <Picker
          dropdownIconColor="white"
          style={styles.pickerstyle}
          selectedValue={level}
          mode={"dialog"}
          onValueChange={(itemValue) => setLevel(itemValue)}>
          <Picker.Item label="Easy" value="Easy" />
          <Picker.Item label="Medium" value="Medium" />
          <Picker.Item label="Hard" value="Hard" />
        </Picker>
      </View>
      <View style={styles.btncontainer}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Quiz', {
          category: category,
          level: level,
        })} >
          <Text style={styles.btntxt}>Start Quiz</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </ImageBackground>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btncontainer:
  {
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  btn:{
    borderWidth:1,
    borderColor:'#ff0000',
    padding: 8,
    borderRadius: 22
  },
  btntxt:{
    color:'white',
    fontSize: 25,
    borderRadius:5,
    padding:8, 
    fontWeight: '400'

  },
  pickercontainer: {
    justifyContent: 'center',
    borderColor:'white',
    alignItems: 'center',
    borderWidth: 1,
    height: 50,
    width: 250,
    borderRadius: 15,
    padding: 10,
    marginBottom: 25,
    borderColor:'#ff0000',

  },
  pickerstyle:{
    width: 200,
     borderWidth: 30,
      borderColor: 'black',
      color:'white',
  }

});