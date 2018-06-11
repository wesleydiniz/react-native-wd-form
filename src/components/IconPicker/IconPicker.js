//@flow
import React, { PureComponent } from 'react';
import { View, Image, Text, Platform, TextInput } from 'react-native';
import styles from './IconPicker.style';
import { Dropdown } from 'react-native-material-dropdown';
import { COLORS } from 'common-styles';

type Props = {
  icon?: any,
  children: any,
  onValueChange?: () => void,
  selectedValue?: any,
  data: Array<any>
};

export default class IconPicker extends PureComponent<Props> {
  static defaultProps = {
    onValueChange: () => false
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        {this.props.label ? (
          <Text style={{ color: '#b5b6b7', marginBottom: 5 }}>
            {this.props.label}
          </Text>
        ) : (
          <View />
        )}
        <View style={styles.pickerContainer}>
          {this.props.icon ? (
            <View style={styles.iconContainer}>
              <Image source={this.props.icon} />
            </View>
          ) : (
            <View />
          )}

          <View style={styles.textContainer}>
            <Dropdown
              value={this.props.selectedValue}
              data={this.props.data}
              itemCount={6}
              inputContainerStyle={{ borderBottomColor: 'transparent' }}
              selectedItemColor={COLORS.LIGHTER_COLOR}
              onChangeText={(value, index, data) =>
                this.props.onValueChange(value, index, data)
              }
            />
          </View>
        </View>
      </View>
    );
  }
}
