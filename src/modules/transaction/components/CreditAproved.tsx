import React from 'react';
import {View, StyleSheet, Image, Text, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from '../../../constants/colors';
import {Icons} from '../../../constants/images';

function CreditAproved({value}) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() =>
        Alert.alert(
          'Empréstimo pessoal',
          'Estamos trabalhando para melhorar a sua experiência :)',
        )
      }>
      <View style={styles.rectangleContainer}>
        <View style={styles.icon}>
          <Image source={Icons.currency} />
        </View>
        <View>
          <Text style={styles.personalLoan}>Empréstimo pessoal</Text>
          <Text
            style={
              styles.creditAproved
            }>{`Você tem R$ ${value} pré-aprovados!`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  rectangleContainer: {
    backgroundColor: Colors.white,
    width: 320,
    height: 62,
    borderRadius: 8,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  personalLoan: {
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
  },
  creditAproved: {
    fontSize: 14,
    color: 'grey',
    fontFamily: 'Montserrat-Bold',
  },
  icon: {
    paddingRight: 12,
  },
});

export default CreditAproved;
