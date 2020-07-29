import React from 'react';
import { View,Text, Image, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const App = () => {
    return(
<View style={{backgroundColor:'grey',flex:1,flexDirection:'column'}}>
    
    <ImageBackground style={{flex:1,resizeMode:'cover',justifyContent:'center'}} source={require('./images/L.png') } />
</View>
    );
}

export default App;