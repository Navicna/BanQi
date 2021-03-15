import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../../constants/colors';

function BankTransaction({icon, title, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1}>
      <View style={styles.squareContainer}>
        <View style={styles.organize}>
          <Image source={icon} />
        </View>
        <View style={styles.organize}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  squareContainer: {
    backgroundColor: Colors.white,
    width: 120,
    height: 120,
    borderRadius: 8,
    paddingHorizontal: 14,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  organize: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
  },
});

export default BankTransaction;
