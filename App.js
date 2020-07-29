import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import mycomponent from './components/firstcomponent';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={textStyle.container}>Testing the App</Text>
      <StatusBar style="auto" />
      <Button title="My button" onPress = {() => Alert.alert('button pressed')} />
      <Text>mycomponent</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const textStyle = StyleSheet.create({
  container:{
    color: 'white'
  },
});

export default App;
