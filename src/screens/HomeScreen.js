import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi World!</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to components Demo!"
      />

      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to components List!"
      />

      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to components Image!"
      />

      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to components Counter!"
      />

      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to components Color!"
      />

      <Button
        onPress={() => navigation.navigate("Square")}
        title="Go to components Square!"
      />

      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text> Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
