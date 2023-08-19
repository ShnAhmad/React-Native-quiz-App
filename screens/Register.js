import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from './config';


function Register({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registeUser = async () => {
        try {
            await setDoc(doc(db, "users", email), {
              email,
              password,
            });
           Alert.alert("Registered");
           navigation.navigate("Login");
          } catch (e) {
            console.log(e);
          }
    }

    return (
        <ImageBackground source={require("../assets/tt.jpg")} style={styles.container}>
<View style={styles.form}>
            <Text size={35} style={styles.formText}>Registration</Text>
            <TextInput style={styles.textInput} value={email} onChangeText={(text) => setEmail(text)} placeholder="Email" />
            <TextInput secureTextEntry style={styles.textInput} value={password} onChangeText={(text) => setPassword(text)} placeholder="Password" />
            <View style={styles.btnContainer}>


            <TouchableOpacity style={styles.btn} onPress={() =>  registeUser(email, password)}>
                <Text style={styles.btntxt}>Register</Text>
              </TouchableOpacity >

            <Text size={20} style={styles.textP}>OR</Text>

            <TouchableOpacity  style={styles.btn} onPress={() =>
              navigation.navigate("Login")
            }>
            <Text size={20} style={styles.btntxt}>Login</Text>
            </TouchableOpacity>
            </View>

        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
       container: {
        flex: 1
    },
    form: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 80
    },
    formText: {
        color: "white",
        fontWeight: "500",
        marginBottom: 30,
        fontSize:30
    },
    textInput: {
        marginVertical: 10,
        backgroundColor: "white",
       fontSize: 15,
        fontWeight: "bold",
       padding: 10,
       width: '100%',
       marginBottom: 10,
       borderRadius: 12,
       borderColor: 'blue',
       borderWidth: 2,
    },
   
    btnContainer: {
        marginTop: 20,
        justifyContent:'center',
        alignItems:'center'
    },
    textP: {
        marginVertical: 10,
        fontSize:20,
        color:'white'
    },
   
    btn: {
        // backgroundColor: 'coral',
        padding: 10,
        paddingHorizontal: 50,
        marginBottom: 10,
        borderRadius: 12,
        borderColor: '#800080',
        borderWidth: 2,
      },
      btntxt: {
        fontSize: 18,
        color:'#800080',
        borderRadius: 5,
        fontWeight: '900'
      },
})

export default Register;