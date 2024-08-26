import { createStackNavigator } from '@react-navigation/stack';
import { CargandoPantallas } from '../pantallas/cargando/Cargando-Pantallas';
import { PermisoPantallas } from '../pantallas/Permiso/Permiso-Pantallas';
import { MapaPantalla } from '../pantallas/Mapas/Mapa-Pantalla';
 export type RootStackParametros ={
    CargandoPantallas: undefined;
    PermisoPantallas: undefined;
    MapaPantalla: undefined;
 }
const Stack = createStackNavigator<RootStackParametros>();

export const StackNavegacion = () => {
  return (
    <Stack.Navigator 
    initialRouteName="CargandoPantallas"
    screenOptions={{
        
        headerShown:false,
        cardStyle:{
            backgroundColor:"white"
        }
    }}>
      <Stack.Screen name="CargandoPantallas" component={CargandoPantallas} />
      <Stack.Screen name="PermisoPantallas" component={PermisoPantallas} />
      <Stack.Screen name="MapaPantalla" component={MapaPantalla} />
      
    </Stack.Navigator>
  );
}