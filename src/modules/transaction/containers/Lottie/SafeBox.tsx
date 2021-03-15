import React from 'react';
import LottieView from 'lottie-react-native';
import {Lottie} from '../../../../constants/images';
import {View} from 'react-native';

function MarketPlace() {
  return (
    <View style={{flex: 1}}>
      <LottieView autoPlay loop source={Lottie.safebox} />
    </View>
  );
}

export default MarketPlace;
