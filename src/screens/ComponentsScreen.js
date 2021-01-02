import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Burak";
  const content = <Text> Hello to you! </Text>;

  return (
    <View>
      <Text style={styles.textStyle}> Getting Started with React Native!</Text>
      <Text style={styles.nameStyle}> My name is {name} </Text>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    color: "red",
    padding: 10
  },
  nameStyle:{
      fontSize: 20
  }
});

export default ComponentsScreen;
