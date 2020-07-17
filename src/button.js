import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';

export class StyledButton extends Component {
    render () {
        const { props } = this;
        let { buttonStyle = styles.buttonStyle, textStyle = styles.textStyle, viewStyle = {}} = props;

        return (<View>
              <TouchableOpacity style={[styles.button, buttonStyle]} onPress={props.onPress}>
              <Text style={[styles.text, textStyle]}>{props.text}</Text>
              </TouchableOpacity>
        </View>)
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#463F3F',
        opacity: 0.9,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        elevation: 2, shadowColor: '#000', shadowRadius: 30, shadowOpacity: 0.5, shadowOffset: { width: 1, height: 1}
      },
      buttonStyle: {},
      text:{
        color:'#fff',
        textAlign:'center',
        fontFamily: 'ProximaNova-Semibold',
        fontSize: 15
      },
      textStyle: {}
});
