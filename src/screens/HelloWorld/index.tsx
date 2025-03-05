import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {RouteProp} from '@react-navigation/native';
import {dip} from '@src/constants/u';
import {RootStacksParams, RootStacksProp} from '..';
import Basic from './components/Basic';
import Company from './components/Company';
import Conclusion from './components/Conclusion';
import Experience from './components/Experience';
import {useCaches} from '@src/constants/store';
import {colors} from '@src/constants/c';

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'HelloWorld'>;
}

const HelloWorld: React.FC<MyProps> = props => {
  const [s, setS] = useState(0);
  const {setColors} = useCaches();

  useEffect(() => {
    let timer = setInterval(() => {
      setS(t => t + 1);
    }, 1000);
    return function () {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (s % 10 == 0) {
      setColors([...colors].sort(() => Math.random() - 0.5));
    }
    return function () {};
  }, [s]);

  return (
    <View style={{flex: 1}}>
      <View style={{height: dip(48)}} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.view}>
        {[<Basic />, <Experience />, <Company />, <Conclusion />].map(
          (it, i) => (
            <View style={{marginBottom: dip(24)}} key={i}>
              {it}
            </View>
          ),
        )}
        <View style={{height: dip(108)}} />
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
