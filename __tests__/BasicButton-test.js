import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { BasicButton } from '../src/components';

it('renders correctly', () => {
  const button = renderer.create(<BasicButton label="Test Button" />).toJSON();
  expect(button).toMatchSnapshot();
});
