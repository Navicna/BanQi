import React from 'react';
import LottieView from 'lottie-react-native';
import {Lottie} from '../../../../constants/images';

function Cards() {
  return <LottieView autoPlay loop source={Lottie.cards} />;
}

export default Cards;
