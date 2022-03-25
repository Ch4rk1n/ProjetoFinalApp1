import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../views/login.js';
import Homepage from '../views/homepage'
const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
    return (
      <NavigationContainer>
        <Navigator>
          <Screen 
            name="Login"
            component={Login} 
          />
          <Screen 
            name="Homepage"
            component={Homepage} 
          />
        </Navigator>
      </NavigationContainer>
    )
}