import React, {Component} from 'react';
import {View, Text, Stylesheet} from 'react-native';
import {Navigation} from 'react-native-navigation';

const HomeScreen = (props) => {
  return (
    <View style={styles.root}>
      <Text>Home Screen</Text>
    </View>
  );
};

Navigation.registerComponent('Home', () => HomeScreen); //componentes dentro de la navegación con nombre único.

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});

const styles = Stylesheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
