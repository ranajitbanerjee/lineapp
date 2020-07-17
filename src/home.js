import React, {Component} from 'react';
import { View, Text, Image, TextInput, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import { StyledButton } from './button';
import { styles as uiStyles } from './styles/ui-components.style';
import { FlatGrid } from 'react-native-super-grid';

const places = {
    Doctors: require('../assets/images/doctor.png'),
    Banks: require('../assets/images/bank.png'),
    Salons: require('../assets/images/bank.png'),
    ATM: require('../assets/images/bank.png'),
    Medicines: require('../assets/images/doctor.png'),
    Grocery: require('../assets/images/bank.png'),
};

function Card (props) {
    return (
        <View style={{ backgroundColor: '#ffffff',
        opacity: 0.9,
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: 100,
        height: 100,
        elevation: 2, shadowColor: '#000', elevation: 4,
        shadowColor: '#9D8A8A',
        shadowRadius: 10,
        shadowOpacity: 0.5}}>
            <View style={{
        justifyContent: 'center', flex: 0.8}}>
                <Image style={styles.logo} source={props.imageUrl} style={{width: 30, height: 30}}></Image>
            </View>
            <View style={{justifyContent: 'center', flex: 0.2 }}>
                <Text>{props.text}</Text>
            </View>

        </View>
    )
}

function HorizontalCard (props) {
    return (
        <View style={{ backgroundColor: '#ffffff',
        opacity: 0.9,
        paddingHorizontal: 20,
        paddingVertical: 20,
        elevation: 2, shadowColor: '#000', elevation: 4,
        shadowColor: '#9D8A8A',
        shadowRadius: 10,
        shadowOpacity: 0.5,
        marginRight: 10,
        justifyContent: 'space-between',
        flexDirection: 'row'}}>
            <View>
                <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 16 }} >{props.text} </Text>
                <Text>Time: 8:00 am</Text>
                <Text>Your waiting number: 40 </Text>
            </View>
            <View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 24 }}>20</Text>
                </View>
                <Text>Current Status </Text>
            </View>
        </View>
    )
}

class HomeScreen extends Component {
    render () {
        const doctors = [{
            id: 'doctor',
            text: 'Dr. Subrata Paul'
        }];
        const salons = [{
            id: 'salon',
            text: 'Habibs Salon'
        }];

        const placesList = Object.keys(places);
        return ( <View style={styles.container}>
            <View style={ { marginHorizontal: 20 } }>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image style={styles.logo} source={require('../assets/images/marker.png')} style={{width: 20, height: 20}}></Image>
                        <Text style={styles.headerText}> Cooch Behar </Text>
                    </View>
                    <View>
                        <Image style={styles.logo} source={require('../assets/images/notification.png')} style={{width: 20, height: 20}}></Image>
                    </View>
                </View>
                <View style = {{ marginTop: 30 }}>
                    <Text style={styles.headerText}> PLACES </Text>
                </View>
                <FlatGrid
  itemDimension={90}
  data={placesList}
  style={{marginTop: 20, marginLeft: 0}}
  renderItem={({ item }) => (<Card imageUrl={places[item]} text={item}></Card>)}
/>
<View style={{marginTop: 20 }}>

<Text style={styles.headerText}>YOUR LATEST BOOKINGS</Text>
</View>
<Text style={[styles.headerText, { marginTop: 10 }]}> Doctors </Text>
<FlatList
        data={doctors}
        renderItem={({item}) => {
            return (<View style={{ marginVertical: 10 }}>
                <HorizontalCard  text={item.text}></HorizontalCard>
            </View>)
        }}
        keyExtractor={item => item.id}
      />
      <Text style={[styles.headerText, { marginTop: 10 }]}> Salons </Text>
<FlatList
        data={salons}
        renderItem={({item}) => {
            return (<View style={{ marginVertical: 10 }}>
                <HorizontalCard  text={item.text}></HorizontalCard>
            </View>)
        }}
        keyExtractor={item => item.id}
      />
            </View>
        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    logo: {
        marginHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerText: {
        fontSize: 16,
        fontFamily: "ProximaNova-Bold"
    }
  });


export default HomeScreen;