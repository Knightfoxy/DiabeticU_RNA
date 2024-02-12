/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import BaseNavigator from './js/navigators';
import { NavigationContainer } from '@react-navigation/native';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import toastConfig from './js/components/Toast';

function App(): JSX.Element {
  return (
    <>
    <NavigationContainer>
      <BaseNavigator />
      </NavigationContainer>
      <Toast config={toastConfig} />
    </>
  );
}
export default App;
