import {Alert} from 'react-native';
import {Icons} from '../../../constants/images';

export const transitionsForm = [
  {
    name: 'PIX',
    icon: Icons.pix,
    type: 'pix',
  },
  {
    name: 'Depositar',
    icon: Icons.pinkArrowUp,
    type: 'deposit',
  },
  {
    name: 'Sacar',
    icon: Icons.pinkArrowDown,
    type: 'withdraw',
  },
];

// export const messenger = Alert.alert('Alert Title', 'My Alert Msg', [
//   {
//     text: 'Cancel',
//     onPress: () => console.log('Cancel Pressed'),
//     style: 'cancel',
//   },
//   {text: 'OK', onPress: () => console.log('OK Pressed')},
// ]);
