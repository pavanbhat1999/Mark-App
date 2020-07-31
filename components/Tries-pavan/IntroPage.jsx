import React from 'react';
import { View,Text, Image, ImageBackground } from 'react-native';


const Intro = () => {
    return(
<View style={{backgroundColor:'grey',flex:1,flexDirection:'column'}}>
    
    <ImageBackground style={{flex:1,resizeMode:'cover',justifyContent:'center'}} source={require('../images/L.png') } />
</View>
    );
}

export default Intro;