import { View, Text, AppState } from 'react-native'
import React, { PropsWithChildren, useEffect } from 'react'
import { UsarPermisoStore } from '../../store/Permisos/Usar-Permis.Store'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParametros } from '../navegacion/StackNavegacion';

export const ComprobarPermisos = ({children}: PropsWithChildren) => {
    const {ubicacionEstatus, ComprobarPermisoUbicacion} = UsarPermisoStore();
    const navegacion = useNavigation<NavigationProp<RootStackParametros>>();
    useEffect(() => {
      if(ubicacionEstatus ==="granted"){
        navegacion.reset({
            routes:[{
                name:"MapaPantalla"
            }]
        })
      }
      else if(ubicacionEstatus !=="undetermined"){
        navegacion.navigate("PermisoPantallas")
      }
    }, [ubicacionEstatus])
    
    useEffect(() => {
        const suscripcion = AppState.addEventListener("change", (siguienteEstado)=> {
            if(siguienteEstado ==="active")
            {
                 ComprobarPermisoUbicacion();
            }
        })
        return ()=> {
            suscripcion.remove();
        }
    }, [])
    
  return (

    <>
        {children}
    </>
  )
}

