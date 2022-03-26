import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../views/login.js';
import Homepage from '../views/homepage.js'
import Tipo_produtos from '../views/tipo_produtos.js';
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
          <Screen 
            name="Tipo_produtos"
            component={Tipo_produtos} 
          />
        </Navigator>
      </NavigationContainer>
    )
}