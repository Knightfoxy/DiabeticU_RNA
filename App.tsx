/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import BaseNavigator from './js/navigators';
import { NavigationContainer } from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <BaseNavigator />
    </NavigationContainer>
  );
}
export default App;
