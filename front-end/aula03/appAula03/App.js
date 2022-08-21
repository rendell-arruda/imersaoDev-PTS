import React, { Component } from 'react'
import {
  View,
  Button,
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Alert
} from 'react-native'

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button title="Clique-Me" onPress={() => Alert.alert('Olá!')} />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  }
})

export default App
