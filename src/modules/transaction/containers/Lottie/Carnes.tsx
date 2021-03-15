import React from 'react';
import LottieView from 'lottie-react-native';
import {Lottie} from '../../../../constants/images';

function Carnes() {
  return <LottieView autoPlay loop source={Lottie.constructing} />;
}

export default Carnes;
