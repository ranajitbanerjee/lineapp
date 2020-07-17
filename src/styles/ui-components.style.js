import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  loginButton: {
    paddingVertical: hp('1.8%'),
    width: wp('90%')
  },
  loginButtonText: {
    fontSize: hp('1.8%')
  },
  inputbox: {
    height: hp('6%'),
    borderRadius: 7,
    paddingLeft: 10,
    backgroundColor: '#fff',
    color: '#000000',
    fontFamily: 'ProximaNova-Semibold',
    fontSize: 15,
    elevation: 4,
    shadowColor: '#9D8A8A',
    shadowRadius: 10,
    shadowOpacity: 0.5,
    width: wp('85%')
  },
});
