import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../../../constants/colors';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {height, width} = Dimensions.get('screen');

export const Container: React.FC = ({children}) => (
  <View style={styles.container}>{children}</View>
);

export const MyBalance: React.FC<{visible: boolean; onPress: () => void}> = ({
  children,
  visible,
  onPress,
}) => (
  <View style={styles.balanceContainer}>
    <Text style={styles.myBalance}>Meu saldo:</Text>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text style={[styles.totalValue, {fontSize: 18}]}>R$ </Text>
      <Text style={styles.totalValue}>{children}</Text>
      <TouchableOpacity onPress={onPress}>
        <Ionicons
          name={visible ? 'md-eye-outline' : 'md-eye-off-outline'}
          size={24}
          color={'black'}
          style={{paddingLeft: 8}}
        />
      </TouchableOpacity>
    </View>
  </View>
);

export const Carousel: React.FC<{data: any; renderItem: any}> = ({
  data,
  renderItem,
}) => <FlatList horizontal data={data} renderItem={renderItem} />;

export const TransactionHistoryContainer: React.FC = ({children}) => (
  <View style={styles.historyContainer}>
    <Text style={styles.history}>Histórico de transações</Text>
    {children}
  </View>
);

export const SeeMore: React.FC<{onPress: () => void}> = ({onPress}) => (
  <View style={styles.seeMoreContainer}>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.seeMore}>VER MAIS</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.appBackGround,
    alignItems: 'center',
    paddingBottom: 28,
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  myBalance: {
    fontSize: 14,
    marginBottom: 4,
    color: 'black',
    fontFamily: 'Montserrat-Regular',
  },
  totalValue: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Montserrat-Bold',
  },
  balanceContainer: {
    paddingBottom: 40,
    alignItems: 'center',
  },
  history: {
    fontSize: 16,
    paddingTop: 28,
    fontWeight: '600',
    paddingBottom: 18,
    paddingLeft: 20,
    fontFamily: 'Montserrat-Regular',
  },
  historyContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  seeMore: {
    color: Colors.skyBlue,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Regular',
  },
  seeMoreContainer: {
    height: 44,
    width: width,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20,
  },
});
