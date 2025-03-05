import {dip} from '@src/constants/u';
import React, {ReactElement} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface MyProps {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode | ReactElement;
}

const Card: React.FC<MyProps> = props => {
  return <View style={[styles.view, props?.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  view: {
    borderRadius: dip(12),
    backgroundColor: '#fff',
    paddingHorizontal: dip(16),
    paddingVertical: dip(12),
  },
});

export default Card;
