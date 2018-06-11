//@flow
import React, { PureComponent } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import styles from './BasicInput.style';
import { TextInputMask } from 'react-native-masked-text';

type Props = {
  error: string,
  placeholder: string,
  autoCapitalize: string,
  secureTextEntry: boolean,
  value: string,
  options: any,
  onChangeText: (?string) => void,
  keyboardType?: string,
  onSubmitEditing: () => void,
  maxLength: number,
  mask: string,
  blurOnSubmit: boolean,
  multiline: boolean
};

export default class BasicInput extends PureComponent<Props> {
  static defaultProps = {
    onChangeText: () => false
  };

  defineStyle() {
    if (this.props.error) {
      return { borderWidth: 1, borderColor: '#ff0000' };
    } else {
      return styles.input;
    }
  }

  render() {
    if (!this.props.mask) {
      return (
        <View style={styles.view}>
          <Text style={styles.label}>
            {this.props.label ? this.props.label : ''}
          </Text>
          <TextInput
            ref="input"
            style={[styles.input, this.defineStyle()]}
            height={this.props.height ? this.props.height : 40}
            borderColor={this.props.error ? 'red' : '#c1c1c1'}
            placeholder={this.props.placeholder}
            placeholderTextColor="#d6d6d6"
            autoCapitalize={this.props.autoCapitalize}
            secureTextEntry={this.props.secureTextEntry}
            underlineColorAndroid="transparent"
            value={this.props.value}
            onChangeText={text => this.props.onChangeText(text)}
            keyboardType={this.props.keyboardType}
            blurOnSubmit={this.props.blurOnSubmit}
            onSubmitEditing={() => this.props.onSubmitEditing()}
            maxLength={this.props.maxLength}
            multiline={this.props.multiline}
          />
          <Text style={styles.errorLabel}>
            {this.props.error ? this.props.error : ''}
          </Text>
        </View>
      );
    } else {
      return (
        <View style={styles.view}>
          <Text style={styles.label}>
            {this.props.label ? this.props.label : ''}
          </Text>
          <TextInputMask
            ref="input"
            height={this.props.height ? this.props.height : 40}
            style={[styles.input, this.defineStyle()]}
            type={this.props.mask}
            onChangeText={() => false}
            placeholder={this.props.placeholder}
            placeholderTextColor="#d6d6d6"
            autoCapitalize={this.props.autoCapitalize}
            underlineColorAndroid="transparent"
            value={this.props.value}
            options={this.props.options}
            keyboardType={this.props.keyboardType}
            borderColor={this.props.error ? 'red' : '#c1c1c1'}
            onChangeText={text => this.props.onChangeText(text)}
            onSubmitEditing={() => this.props.onSubmitEditing()}
            maxLength={this.props.maxLength}
            multiline={this.props.multiline}
          />
        </View>
      );
    }
  }
}
