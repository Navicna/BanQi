import React from 'react';
import {getCustomerData} from '../../../../services/ep/balance';
import * as HOME from './HomeScreen.styles';
import {transitionsForm} from '../../utils/transactions.utils';
import {Alert, FlatList, View} from 'react-native';
import CreditAproved from '../../components/CreditAproved';
import BankTransaction from '../../components/BankTransaction';
import TransactionHistory, {
  Separator,
} from '../../components/TransactionHistory';
import {getAmountValue} from '../../../../util/Currency';
import NavBar from './NavBar';
function HomeScreen() {
  const customer = getCustomerData();
  const {amount} = getAmountValue(customer.balance);
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(2);
  const [displayArray, setDisplayArray] = React.useState([]);
  const [loadMoreVisible, setMoreVisible] = React.useState(true);
  const [amountVisible, setAmountVisible] = React.useState(false);

  React.useEffect(() => {
    if (page === 1) {
      setNewData();
    }
  }, []);

  React.useEffect(() => {
    if (customer.transactions.length === displayArray.length) {
      setMoreVisible(false);
    }
  }, [displayArray]);

  function setNewData() {
    const newArray = [];
    for (var i = 0; i < page * perPage; i++) {
      newArray.push(customer.transactions[i]);
    }
    setDisplayArray(newArray);
    setMoreVisible(true);
  }

  function pagination() {
    setPage(page + 1);
    setNewData();
  }

  function onPressTransactionType(type: string) {
    if (type === 'pix')
      return Alert.alert(
        'Pix',
        'Uma forma muito prática de pagar e receber dinheiro, tudo em segundos, a qualquer dia e a qualquer hora',
      );
    if (type === 'deposit')
      return Alert.alert(
        'Depositar',
        'Aqui você pode fazer suas transações bancárias.',
      );
    if (type === 'withdraw')
      return Alert.alert(
        'Depositar',
        'Aqui você pode fazer suas transações bancárias.',
      );
  }

  return (
    <NavBar>
      <HOME.Container>
        <HOME.MyBalance
          visible={amountVisible}
          onPress={() => setAmountVisible(!amountVisible)}>
          {amountVisible ? amount : '--'}
        </HOME.MyBalance>
        <HOME.Carousel
          data={transitionsForm}
          renderItem={({item, index}) => (
            <View style={{marginRight: 16, marginLeft: 2, marginVertical: 14}}>
              <BankTransaction
                icon={item.icon}
                title={item.name}
                onPress={() => onPressTransactionType(item.type)}
              />
            </View>
          )}
        />
        <CreditAproved value={customer.creditAproved} />
      </HOME.Container>
      <HOME.TransactionHistoryContainer>
        <FlatList
          data={displayArray}
          renderItem={({item, index}) => {
            const {creditIn, amount} = getAmountValue(item.amount);
            return (
              <>
                <TransactionHistory
                  description={item.description}
                  date={item.date}
                  value={amount}
                  key={index}
                  creditIn={creditIn}
                />
                <Separator />
              </>
            );
          }}
          keyExtractor={item => item._id}
        />
        {loadMoreVisible && <HOME.SeeMore onPress={() => pagination()} />}
      </HOME.TransactionHistoryContainer>
    </NavBar>
  );
}

export default HomeScreen;
