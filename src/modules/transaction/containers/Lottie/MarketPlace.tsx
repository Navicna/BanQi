import React from 'react';
import LottieView from 'lottie-react-native';
import {Lottie} from '../../../../constants/images';

function MarketPlace() {
  return <LottieView autoPlay loop source={Lottie.marketPlace} />;
}

export default MarketPlace;
