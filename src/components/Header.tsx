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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: rgb(214, 28, 205),
    font-size: 5rem,
    font-weight: 800,
    margin: 0,
  },
  headerText: {
    color: rgb(245, 85, 11),
    font-weight: 800,
  },
});

export default Header
