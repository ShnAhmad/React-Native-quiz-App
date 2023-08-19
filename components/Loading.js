import { View, ActivityIndicator, Text, StyleSheet, ImageBackground } from "react-native";

export function LoadingIndicator() {
  return (
    <ImageBackground source={require("../assets/aa.jpg")} style={css.main}>
      <ActivityIndicator color={"#800080"} size={100}  />
      <Text style={css.text}>Loading . . .</Text>
      <Text style={css.text}>Please Wait !!</Text>
    </ImageBackground>
  );
}

const css = StyleSheet.create({
  main: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color:'white'
  },
});