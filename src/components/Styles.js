/**
 * @providesModule common-styles
 * @flow
 */
import { StyleSheet } from 'react-native';

export const COLORS = {
  BACKGROUND_COLOR: '#FFF',
  LIGHTER_COLOR: '#152C55',
  LIGHT_COLOR: '#4D648D',
  MEDIUM_COLOR: '#2D4571',
  DARK_COLOR: '#152C55',
  DARKEST_COLOR: '#051838',
  TEXT_COLOR: '#383838',
  TEXT_LIGHT_COLOR: '#dbdbdb'
};

export default StyleSheet.create({
  basicLabel: {
    color: COLORS.TEXT_COLOR,
    fontSize: 15,
    fontWeight: 'bold'
  },

  basicTitle: {
    color: COLORS.TEXT_COLOR,
    fontSize: 35,
    fontWeight: 'bold'
  },

  basicText: {
    color: COLORS.TEXT_COLOR,
    fontSize: 15
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_COLOR
  },
  top: {
    flex: 1,
    padding: 10
  },
  content: {
    flex: 4,
    padding: 10
  },
  footer: {
    flex: 1,
    padding: 10
  }
});
