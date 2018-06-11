//@flow
import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import styles from './BasicButton.style';

type Props = {
  onPress?: () => void,
  label?: string,
  icon?: Object,
  buttonType?: string,
  buttonStyle?: Object,
  buttonColor?: String
};

export default class BasicButton extends PureComponent<Props> {
  static defaultProps = {
    onPress: () => false
  };

  getButtonStyle() {
    let buttonStyle = [styles.button];

    if (this.props.buttonColor) {
      buttonStyle.push({
        backgroundColor: this.props.buttonColor
      });
    }
    if (this.props.buttonType === 'success') {
      buttonStyle.push(styles.buttonSuccess);
    } else if (this.props.buttonType === 'danger') {
      buttonStyle.push(styles.buttonDanger);
    }
    if (this.props.buttonStyle) {
      buttonStyle.push(this.props.buttonStyle);
    }
    return buttonStyle;
  }

  render() {
    if (this.props.icon) {
      return (
        <TouchableOpacity
          style={this.getButtonStyle()}
          onPress={() => (this.props.onPress ? this.props.onPress() : false)}
        >
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Image source={this.props.icon} />
          </View>
          <View style={{ flex: 4, alignItems: 'flex-start', paddingLeft: 20 }}>
            <Text style={styles.buttonText}>{this.props.label}</Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={this.getButtonStyle()}
          onPress={() => (this.props.onPress ? this.props.onPress() : false)}
          ref="button"
        >
          <Text style={styles.buttonText}>{this.props.label}</Text>
        </TouchableOpacity>
      );
    }
  }
}
