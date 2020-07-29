import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, ImageBackground } from 'react-native';
import Intro from './components/IntroPage';
const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(1)).current  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 0,
        duration: 5000,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
  return (
    <View style={{backgroundColor:'grey',flex:1,flexDirection:'column'}}>
      <FadeInView style={{width:1000,height:1000}}>
      <ImageBackground style={{flex:1,resizeMode:'cover',justifyContent:'center'}} source={require('./images/L.png') } />
      </FadeInView>
    </View>
  )
}
