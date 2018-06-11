import { StyleSheet } from 'react-native';
import { COLORS } from 'common-styles';

export default StyleSheet.create({
  mainContainer: {
    marginBottom: 10
  },
  pickerContainer: {
    flexDirection: 'row'
  },
  iconContainer: {
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3,
    backgroundColor: COLORS.LIGHTER_COLOR,
    alignItems: 'center',
    flex: 1,
    padding: 5,
    height: 45,
    justifyContent: 'center'
  },
  textContainer: {
    flex: 6,
    paddingBottom: 15,
    paddingLeft: 10,
    height: 45,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.TEXT_LIGHT_COLOR
  }
});
