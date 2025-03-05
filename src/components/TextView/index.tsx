import {fonts} from '@src/constants/c';
import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';

interface MyProps {
  style?: StyleProp<TextStyle>;
  children: string;
}

const TextView: React.FC<MyProps> = props => {
  const {style, children} = props;
  return <Text style={[{fontFamily: fonts.harmonyOS}, style]}>{children}</Text>;
};

export default TextView;
