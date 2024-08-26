import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavegacion} from './presentacion/navegacion/StackNavegacion';
import {ComprobarPermisos} from './presentacion/proveedores/ComprobarPermisos';

export const MappApp = () => {
  return (
    <NavigationContainer>
      <ComprobarPermisos>
        <StackNavegacion />
      </ComprobarPermisos>
    </NavigationContainer>
  );
};
