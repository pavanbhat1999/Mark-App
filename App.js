import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, SafeAreaView, SafeAreaViewComponent, TextInput,Image } from 'react-native';
import Mycomponent from './components/Firstcomponent';

const App = () => {
  return (
  
    <ScrollView style={styles.container}>
      
      <Text style={styles.textStyle}>
        This is the text displayed from the main App.js
      </Text>
      
      <TextInput 
      style={{backgroundColor:'white',height:50,width: 350,fontSize:50}} 
      placeholder="Enter your text" />
          
      <StatusBar style="dark" />

      <Button title="My button" onPress = {() => Alert.alert('button pressed')} />
      <Mycomponent />
      <Mycomponent />
      <Mycomponent />
      <Mycomponent />
      <Mycomponent /><Mycomponent /><Mycomponent /><Mycomponent /><Mycomponent /><Mycomponent /><Mycomponent /><Mycomponent /><Mycomponent /><Mycomponent /><Mycomponent />

      <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    
    //flex: 1,
    backgroundColor: 'grey',
    // alignItems: 'center',
    // justifyContent: 'center',
    position: 'relative',
    top: 30,
    
  },
  textStyle:{
    color: 'white',
    height: 100,
    
  },
});


export default App;
