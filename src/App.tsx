import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Moviejeeves from "./components/Moviejeeves";
import Header from "./components/Header";


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Moviejeeves />
    </View>
  );
}


const styles = StyleSheet.create({
  body: {
    maxWidth: "100%",
    fontFamily: "Merriweather, serif",
    webkitFontSmoothing: "antialiased",
    mozOsxSmoothing: "grayscale",
  },
  container: {
    opacity: 10,
    backgroundColor: "white",
    borderRadius: 10,
    width: 80,
    margin: "auto",
  }
})