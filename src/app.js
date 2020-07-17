import React, {Component} from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { StyledButton } from './button';
import { styles as uiStyles } from './styles/ui-components.style';
import LoginScreen from './login';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './home';
const Stack = createStackNavigator();

class App extends Component {
    render () {
        return (<NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Login" options= { { headerShown: false }} component={LoginScreen} />
              <Stack.Screen name="Home" options= { { headerShown: false }} component={HomeScreen} />
            </Stack.Navigator>
          </NavigationContainer>)
    }
}



export default App;