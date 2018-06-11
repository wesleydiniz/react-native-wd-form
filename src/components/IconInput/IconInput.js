//@flow
import React, { PureComponent } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import styles from './IconInput.style';

type Props = {
  placeholder?: string,
  autoCapitalize?: string,
  secureTextEntry?: boolean,
  value?: string,
  onChangeText?: (?string) => void,
  icon?: any,
  placeholderTextColor?: string,
  keyboardType?: string,
  onSubmitEditing?: () => void,
  containerStyle?: Object,
  inputStyle?: Object,
  iconStyle?: Object,
  iconColor?: string
};

export default class IconInput extends PureComponent<Props> {
  static defaultProps = {
    onChangeText: () => false
  };

  getContainerStyle() {
    let containerStyle = [styles.container];

    if (this.props.containerStyle) {
      containerStyle.push(this.props.containerStyle);
    }
    return containerStyle;
  }

  getIconStyle() {
    let iconStyle = [styles.iconContainer];

    if (this.props.iconColor) {
      iconStyle.push({ backgroundColor: this.props.iconColor });
    }

    if (this.props.iconStyle) {
      iconStyle.push(this.props.iconStyle);
    }
    return iconStyle;
  }

  getInputStyle() {
    let inputStyle = [styles.textContainer];

    if (this.props.inputStyle) {
      inputStyle.push(this.props.inputStyle);
    }
    return inputStyle;
  }

  render() {
    return (
      <View style={this.getContainerStyle()}>
        <View style={this.getIconStyle()}>
          <Image source={this.props.icon} />
        </View>
        <View style={this.getInputStyle()}>
          <TextInput
            ref="_input"
            autoCapitalize={this.props.autoCapitalize}
            style={styles.textInput}
            secureTextEntry={this.props.secureTextEntry}
            placeholder={this.props.placeholder}
            placeholderTextColor={this.props.placeholderTextColor}
            underlineColorAndroid="transparent"
            value={this.props.value}
            onChangeText={(text: string) => this.props.onChangeText(text)}
            keyboardType={this.props.keyboardType}
            onSubmitEditing={() => this.props.onSubmitEditing()}
          />
        </View>
      </View>
    );
  }
}
