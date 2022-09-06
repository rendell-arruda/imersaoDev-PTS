import React, { Component } from 'react'
import {
  View,
  Pressable,
  Button,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  Alert
} from 'react-native'
import App2 from './App2'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Pressable style={styles.button} onPress={() => App2}>
          <Text style={styles.text}>Pressable</Text>
        </Pressable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
  }
})

export default App
