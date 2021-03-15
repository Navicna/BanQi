import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Colors} from '../../../../constants/colors';
import {Icons} from '../../../../constants/images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyBanQi from '../../components/MyBanQi';
import SafeBox from '../Lottie/SafeBox';

const {height, width} = Dimensions.get('screen');

function NavBar({children}) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <View style={styles.navbarContainer}>
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <MyBanQi visible={visible} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              'Notificações',
              'Estamos trabalhando para melhorar a sua experiência :)',
            )
          }>
          <Image source={Icons.notification} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      {visible ? children : <SafeBox />}
    </>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    backgroundColor: Colors.white,
    height: 56,
    width: width,
    justifyContent: 'space-between',
    padding: 18,
    flexDirection: 'row',
  },
});

export default NavBar;
