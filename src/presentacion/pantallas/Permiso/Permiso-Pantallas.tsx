import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Colores, estiloGlobal } from '../../../config/Tema/Estilo-Global'
import { UsarPermisoStore } from '../../../store/Permisos/Usar-Permis.Store'

export const PermisoPantallas = () => {
  const {ubicacionEstatus, solicitarPermisoUbicacion} = UsarPermisoStore()
  return (
    <View style={{flex:1, justifyContent:"center",alignItems:"center", alignContent:"center"}}>
      <Text style={estiloGlobal.texto}>Habilitar Hubicacion</Text>
      <Pressable style={estiloGlobal.btnPrimario} onPress={()=> solicitarPermisoUbicacion()}>
        <Text style={{color:Colores.blanco}} >Habilitar Localizacion</Text>
      </Pressable>
      <Text style={estiloGlobal.texto}>Estado Actual: {ubicacionEstatus}</Text>
    </View>
  )
}

