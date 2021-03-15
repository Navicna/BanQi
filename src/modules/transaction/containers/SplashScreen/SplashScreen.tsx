import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';

import {Icons} from '../../../../constants/images';
import {delay} from '../../../../util/Date';

const {height, width} = Dimensions.get('screen');

function SplashScreen() {
  const navigation = useNavigation();

  async function Initial() {
    await delay(4000);
    navigation.navigate('Tab');
  }

  React.useEffect(() => {
    Initial();
  }, []);

  return (
    <View style={styles.splash}>
      <View style={styles.container}>
        <Image source={Icons.meu} style={styles.myStyle} resizeMode="contain" />
        <Image
          resizeMode="contain"
          source={Icons.banqi}
          style={styles.banqiStyle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  myStyle: {
    marginBottom: -10,
    marginRight: 6,
    height: 40,
    width: 50,
  },
  banqiStyle: {height: 40, width: 100},
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  splash: {
    height,
    width,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen;
