import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navigation from './navigation/navigation'

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducer from './store/reducer';

const Store = createStore(Reducer);

export default function App() {
  return (
    <Provider store={Store}>
      <Navigation/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
