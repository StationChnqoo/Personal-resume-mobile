import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import * as React from 'react';
// 这个地方用Path alias，@/App会报错
import App from '../../App';
import HelloWorld from './HelloWorld';

export type RootStacksParams = {
  App: undefined;
  HelloWorld: undefined;
};

const RootStack = createNativeStackNavigator<RootStacksParams>();

export type RootStacksProp = NativeStackNavigationProp<RootStacksParams>;

export default function Stacks() {
  const navigator = useNavigationContainerRef();
  // useFlipper(navigator);
  return (
    <NavigationContainer ref={navigator}>
      <RootStack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
          headerShown: false,
          animationDuration: 618,
        }}>
        <RootStack.Screen name="App" component={App} />
        <RootStack.Screen name="HelloWorld" component={HelloWorld} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
