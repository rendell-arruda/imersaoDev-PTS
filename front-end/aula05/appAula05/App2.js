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
import FontAwesome from '@expo/vector-icons/FontAwesome'

// https://fontawesome.com/icons
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FontAwesome.Button
          name="facebook"
          backgroundColor="#3b5998"
          onPress={() => alert('Hello, world!')}
        >
          Login com Facebook
        </FontAwesome.Button>
        <Text> </Text>
        <FontAwesome.Button
          name="apple"
          backgroundColor="black"
          onPress={() => alert('Hello, world!')}
        >
          Login com Apple
        </FontAwesome.Button>
        <Text> </Text>
        <FontAwesome.Button
          name="whatsapp"
          backgroundColor="green"
          onPress={() => alert('Hello, world!')}
        >
          Enviar whatsapp
        </FontAwesome.Button>
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
