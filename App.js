/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { BasicButton, IconInput, IconPicker } from './src/components';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <BasicButton label="Test Button" buttonColor="#649399" />
        <IconInput />
        <IconPicker />
      </View>
    );
  }
}
