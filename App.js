import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView, SafeAreaView, SafeAreaViewComponent, TextInput,Image } from 'react-native';
import Mycomponent from './components/Firstcomponent';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
      <Text style={textStyle.container}>
        This is the text
        
      </Text>
      <TextInput style={{backgroundColor:'white',height:50,width: 350,fontSize:50}} placeholder="Enter your text">
          
      </TextInput>
      <StatusBar style="auto" />
      <Button title="My button" onPress = {() => Alert.alert('button pressed')} />
      <Mycomponent />
      <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    // flex: 1,
    backgroundColor: 'grey',
    // alignItems: 'center',
    // justifyContent: 'center',
    
  },
});

const textStyle = StyleSheet.create({
  container:{
    color: 'white',
    height: 100,
    position: 'relative',
    top: 30,
  },
});

export default App;
