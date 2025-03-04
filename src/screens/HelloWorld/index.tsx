import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {RouteProp} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RootStacksParams, RootStacksProp} from '..';
import Basic from './components/Basic';
import {dip} from '@src/constants/u';

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'HelloWorld'>;
}

const HelloWorld: React.FC<MyProps> = props => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.view}>
        <Basic />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: dip(64),
  },
});

export default HelloWorld;
