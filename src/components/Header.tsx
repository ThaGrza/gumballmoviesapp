import React from 'react'
import { View, StyleSheet, Text} from "react-native";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>Gumball Moives</Text>
      <Text style={styles.headerText}>Randomize Your Movie Night</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: "center",
    opacity: .9,
  },
  header: {
    fontSize: 5,
    fontWeight: "800",
    margin: 0,
  },
  headerText: {
    fontWeight: "800",
  }
});

export default Header
