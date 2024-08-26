import { View, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Mapa } from '../../componente/Mapas/Mapas';
import { UsarUbicacionStore } from '../../../store/Ubicacion/Usar-Ubicacion.Store';
import { CargandoPantallas } from '../cargando/Cargando-Pantallas';
export const MapaPantalla = () => {
  const ultimaUbicacionConocida = UsarUbicacionStore(estado => estado?.UltimaUbicacionConocida)

  
  useEffect(() => {
   if (ultimaUbicacionConocida === null ) {
    UsarUbicacionStore.getState()?.BuscarUbicacion() ?? null;
   }
  }, [])
  
  if(ultimaUbicacionConocida === null){
    return (<CargandoPantallas/>)
  }

  return (
  <View style={Estilo.container}>
    <Mapa
      ubicacionInicial={ultimaUbicacionConocida!}
    /> 
  </View>
  )
}

const Estilo = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,  
  }
 });