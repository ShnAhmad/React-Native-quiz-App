import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text,ImageBackground, View, TouchableOpacity } from 'react-native';

export default function Result({ navigation, route }) {
  const { score } = route.params;
  const banner= score > 5 ? 'https://img.freepik.com/free-vector/men-success-laptop-relieve-work-from-home-computer-great_10045-646.jpg?size=338&ext=jpg&ga=GA1.1.982268021.1663359446&semt=sph':'https://img.freepik.com/free-vector/anxiety-concept-illustration_114360-8054.jpg?size=338&ext=jpg&ga=GA1.1.982268021.1663359446&semt=sph'
  return (
    <ImageBackground source={require("../assets/tt.jpg")} style={styles.container}>
      <Text style={{fontSize:30,marginBottom:20,fontWeight:'900'}}>Result</Text>

      <View>
        <Image
          source={{ uri: banner }}
          style={{ width: 300, height: 300, borderRadius: 10 }} />
      </View>

      <View style={styles.marks}>
        <Text style={styles.markstxt}>Score = {score}</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btntxt} >Home</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
      </ImageBackground>
        );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffafbd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marks:{
    marginTop:20,
    // backgroundColor: 'coral',
    padding: 10,
    paddingHorizontal: 50,
    marginBottom: 10,
    borderRadius: 12,
    // borderColor: '#800080',
    // borderWidth: 2,
  },
  markstxt: {
    color:'white',
    fontSize: 25,
    borderRadius: 5,
    padding: 5,
    fontWeight: '900'
  },
  btn: {
    padding: 10,
    paddingHorizontal: 50,
    marginBottom: 10,
    borderRadius: 12,
    borderColor: '#800080',
    borderWidth: 5,
  },
  btntxt: {
    color:'#800080',
    fontSize: 25,
    borderRadius: 5,
    padding: 5,
    fontWeight: '900'
  },
});

