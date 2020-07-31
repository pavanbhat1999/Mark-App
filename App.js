import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const App = () => {
    return(

        <ScrollView style={{backgroundColor:'grey'}}>
            <Text style ={{padding:30}}>Hello World</Text> 
        </ScrollView>

    );
}

export default App;