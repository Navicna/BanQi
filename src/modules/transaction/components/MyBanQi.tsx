import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Icons} from '../../../constants/images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../constants/colors';

function MyBanQi({visible}) {
  return (
    <View style={styles.mybanqiContainer}>
      <Image source={Icons.meu} resizeMode="contain" style={styles.image} />
      <Image source={Icons.banqi} resizeMode="contain" />
      <Ionicons
        name={visible ? 'chevron-down-outline' : 'chevron-up-outline'}
        size={20}
        color={Colors.hollywoodCerise}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mybanqiContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {marginRight: 2, marginTop: 6},
});

export default MyBanQi;
