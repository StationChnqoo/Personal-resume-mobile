import moment from 'moment';
import 'moment/locale/zh-cn';
import React, { useEffect } from 'react';
import { AppRegistry, Platform, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import { name as appName } from './app.json';
import Screens from './src/screens'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const PersonalResume = () => {
  useEffect(() => {
    moment.locale('zh-cn');
    return function () { };
  }, []);

  return (
      <GestureHandlerRootView>
        <SafeAreaProvider>
          <View style={{ flex: 1 }}>
            <Screens />
          </View>
        </SafeAreaProvider>
      </GestureHandlerRootView>
  );
};

AppRegistry.registerComponent(appName, () => PersonalResume);
