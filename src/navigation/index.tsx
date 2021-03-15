import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../modules/transaction/containers/HomeScreen/HomeScreen';
import {Colors} from '../constants/colors';
import {Icons} from '../constants/images';
import MarketPlace from '../modules/transaction/containers/Lottie/MarketPlace';
import Scan from '../modules/transaction/containers/Lottie/Scan';
import Cards from '../modules/transaction/containers/Lottie/Cards';
import Carnes from '../modules/transaction/containers/Lottie/Carnes';
import {
  HomeSvg,
  MarketSvg,
  ScannerSvg,
  CarnesSvg,
  CardsSvg,
} from '../constants/vectors';
import SplashScreen from '../modules/transaction/containers/SplashScreen/SplashScreen';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

export const navigationRef = React.createRef();

const styles = StyleSheet.create({
  icons: {
    width: 20,
    height: 20,
  },
});

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          //I had problems with svg and due to lack of time i found a not so good solution.
          if (route.name === 'Home') {
            return focused ? (
              <Image source={Icons.home} style={styles.icons} />
            ) : (
              <HomeSvg />
            );
          } else if (route.name === 'Compras') {
            return focused ? (
              <MarketSvg />
            ) : (
              <Image source={Icons.marketPlace} style={styles.icons} />
            );
          } else if (route.name === 'Pagar') {
            return focused ? (
              <ScannerSvg />
            ) : (
              <Image source={Icons.scanner} style={styles.icons} />
            );
          } else if (route.name === 'Cartões') {
            return focused ? (
              <CardsSvg />
            ) : (
              <Image source={Icons.cards} style={styles.icons} />
            );
          } else if (route.name === 'Carnês') {
            return focused ? (
              <CarnesSvg />
            ) : (
              <Image source={Icons.carnes} style={styles.icons} />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.hollywoodCerise,
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Compras" component={MarketPlace} />
      <Tab.Screen name="Pagar" component={Scan} />
      <Tab.Screen name="Cartões" component={Cards} />
      <Tab.Screen name="Carnês" component={Carnes} />
    </Tab.Navigator>
  );
}

export const RootStack = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          headerMode="none"
          screenOptions={{animationEnabled: true, gestureEnabled: true}}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Tab" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
