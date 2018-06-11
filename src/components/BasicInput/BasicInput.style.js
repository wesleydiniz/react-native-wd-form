import { StyleSheet } from 'react-native';
import { COLORS } from 'common-styles';

export default StyleSheet.create({
  view: {
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5
  },
  input: {
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 3,
    backgroundColor: 'transparent',
    fontSize: 18,
    color: COLORS.TEXT_COLOR
  },
  label: {
    color: '#b5b6b7',
    marginLeft: 5,
    marginBottom: 3
  },
  errorLabel: {
    color: '#ff0000',
    fontSize: 15
  }
});
