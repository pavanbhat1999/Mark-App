import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Mycomponent = () => {
    return (
        <View>
          <Text style={styles.container}>I am component</Text>
          <Button title="I am container Button" style={{}} />
          <StatusBar style="auto" />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      
      backgroundColor: '#fff'
    },
  });

export default Mycomponent;