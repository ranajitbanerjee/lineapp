import React, {Component} from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import { StyledButton } from './button';
import { styles as uiStyles } from './styles/ui-components.style';

class LoginScreen extends Component {
    render () {
        const buttonStyle = {
            color: '#fff',
            width: 250,
            marginTop: 20
        };
        return ( <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerText}> LINEAPP </Text>
            </View>
            <View>
                <Image style={styles.logo} source={require('../assets/images/logo.png')} style={{width: 300, height: 200}}></Image>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}> Avoid long queues, get real-time updates, book doctor appointments, salons and more... </Text>
            </View>
            <View style={{ marginVertical: 10 }}>
                <TextInput
                  style={uiStyles.inputbox}
                  placeholder='Username'
                />
            </View>
            <View style={{ marginVertical: 10 } }>
                <TextInput
                  style={uiStyles.inputbox}
                  placeholder='Password'
                  secureTextEntry={true}
                />
            </View>
            <StyledButton buttonStyle={[buttonStyle, { backgroundColor: '#A41717', opacity: 0.8}]}text="Login"></StyledButton>
            <StyledButton buttonStyle={[ buttonStyle, { backgroundColor: '#463F3F', opacity: 0.9}]} text="Create an account"></StyledButton>
            <View style={[styles.descriptionContainer, { marginTop: 10}]}>
                <Text style={styles.description}> or login with </Text>
            </View>
            <View style = {styles.socialIcons}>
                <Image style={[styles.socialLogo, { marginLeft: 10 }]} source={require('../assets/images/google.png')}></Image>
                <Image style={styles.socialLogo} source={require('../assets/images/facebook.png')}></Image>
            </View>
            <StyledButton buttonStyle={[ buttonStyle, { backgroundColor: '#463F3F', opacity: 0.9, marginTop: 40}]} text="Explore without login" onPress={this.onWithoutLoginPress}></StyledButton>
        </View>)
    }

    onWithoutLoginPress = () => {
        this.props.navigation.navigate('Home');
    }
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white'
    },
    socialIcons: {
        flexDirection: "row"
    },
    socialLogo: {
        marginLeft: 10,
        marginRight: 20,
        width: 30, height: 30
    },
    logo: {
        marginHorizontal: 20,
    },
    header: {
        marginTop: 50,
        marginBottom: 20
    },
    headerText: {
        fontSize: 30,
        fontFamily: "ProximaNova-Bold"
    },
    description: {
        fontSize: 14,
        fontFamily: "ProximaNova-Light"
    },
    descriptionContainer: {
        marginHorizontal: 30,
        marginBottom: 20,
    }
  });


export default LoginScreen;