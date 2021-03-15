import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Colors} from '../../../constants/colors';
import {Icons} from '../../../constants/images';
import {transformDate} from '../../../util/Date';

function TransactionHistory({description, date, value, creditIn}) {
  const dateFormated = transformDate(date);

  const valueText = creditIn ? `+ R$ ${value}` : `- R$ ${value}`;
  const subtitleText = creditIn
    ? `Recebido em ${dateFormated}`
    : `Debitado em ${dateFormated}`;

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Image resizeMode="contain" source={Icons.blackArrowDown} />
      </View>
      <View>
        <Text style={styles.description}>{description}</Text>
        <Text
          style={[
            styles.subtitle,
            {color: creditIn ? Colors.attractiveGreen : 'black'},
          ]}>
          {subtitleText}
        </Text>
      </View>
      <View style={styles.valueContainer}>
        <Text
          style={[
            styles.value,
            {color: creditIn ? Colors.attractiveGreen : Colors.lightGray},
          ]}>
          {valueText}
        </Text>
      </View>
    </View>
  );
}

export function Separator() {
  return (
    <View style={styles.separator}>
      <Image source={Icons.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    paddingLeft: 24,
    flex: 1,
  },
  icon: {
    paddingRight: 16,
    justifyContent: 'center',
  },
  description: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Montserrat-Regular',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
  valueContainer: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 20,
  },
  value: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  separator: {
    paddingLeft: 36,
  },
});

export default TransactionHistory;
