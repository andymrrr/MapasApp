import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import { Colores } from '../../../config/Tema/Estilo-Global'

export const CargandoPantallas = () => {
  return (
    <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
     <ActivityIndicator size={30} color={Colores.negro} />
    </View>
  )
}

