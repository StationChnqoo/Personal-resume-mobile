import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {RouteProp} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RootStacksParams, RootStacksProp} from '..';
import Basic from './components/Basic';
import {dip} from '@src/constants/u';
import Experience from './components/Experience';
import Company from './components/Company';

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
    <View style={{flex: 1}}>
      <View style={{height: dip(48)}} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.view}>
        {[<Basic />, <Experience />, <Company />].map((it, i) => (
          <View style={{marginBottom: dip(24)}} key={i}>
            {it}
          </View>
        ))}
      </ScrollView>
      <View style={{height: dip(48)}} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    // paddingVertical: dip(48),
    flex: 1,
    paddingHorizontal: dip(64),
  },
});

export default HelloWorld;
