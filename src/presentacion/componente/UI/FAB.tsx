import React from 'react';
import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

interface Propiedad {
    icono:string;
    onPress: ()=> void;
    estilo?: StyleProp<ViewStyle>
}

export  const FAB = ({icono, onPress, estilo}: Propiedad) => {
  return (
    <View style={[Estilo.btn, estilo]}>
    <Pressable onPress={onPress}>
      <Icon name={icono} size={30} color="white" />
    </Pressable>
  </View>
  )
}

const Estilo = StyleSheet.create({
    btn: {
      zIndex: 1,
      position: 'absolute',
      height: 50,
      width: 50,
      borderRadius: 30,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      shadowOpacity: 0.3,
      shadowOffset: {
        height: 0.27,
        width: 4.5,
      },
      elevation: 5,
    },
  });