
import React, { useEffect, useRef, useState } from 'react'
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps'
import { Ubicacion } from '../../../infraestructura/Interface/Ubicacion';
import { FAB } from '../UI/FAB';
import { UsarUbicacionStore } from '../../../store/Ubicacion/Usar-Ubicacion.Store';

interface Propiedad {
    mostrarUbicacionUsuario?: boolean;
    ubicacionInicial: Ubicacion;
}
export const Mapa = ({mostrarUbicacionUsuario =true, ubicacionInicial}: Propiedad) => {
  const mapaReferencia = useRef<MapView | null>()
  const ubicacionCamara = useRef<Ubicacion>(ubicacionInicial); 
  const {BuscarUbicacion, UltimaUbicacionConocida,historialUbicacionUsuario, VerUbicacion,LimpiarVerUbicacion} = UsarUbicacionStore()
  const [siguiendoUsuario, setSiguiendoUsuario] = useState(true)
  const [mostrarPolilínea, setMostrarPolilínea] = useState(true)
  useEffect(() => {
    
    VerUbicacion();
    return () => {
      LimpiarVerUbicacion();
    }
  }, [])
  
  useEffect(()=> {
    if (UltimaUbicacionConocida && siguiendoUsuario) {
      moverCamaraUbicacion(UltimaUbicacionConocida)
    }
  },[UltimaUbicacionConocida])

  const moverCamaraUbicacion = (ubicacion: Ubicacion) => {
    if(!mapaReferencia)
    {
      return;
    }
    mapaReferencia.current?.animateCamera({
      center: {
        latitude: ubicacion.latitude,
        longitude: ubicacion.longitude
      }
    })
  }
  const moverUbicacionActual = async() =>{
    if(UltimaUbicacionConocida)
    {
      moverCamaraUbicacion(UltimaUbicacionConocida)
    }
    const ubicacion = await BuscarUbicacion();
    if(!ubicacion)
    {
      return;
    }
    moverCamaraUbicacion(ubicacion)
  }
  return (
   <>
   <MapView
     ref={(mapa)=> mapaReferencia.current = mapa}
     showsUserLocation={mostrarUbicacionUsuario}
     onTouchStart={()=> setSiguiendoUsuario(false)}
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={{flex:1}}
      region={{
        latitude: ubicacionCamara.current.latitude,
        longitude: ubicacionCamara.current.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
      {
        mostrarPolilínea && 
        (
          <Polyline 
          coordinates={historialUbicacionUsuario}
          strokeColor='black'
          strokeWidth={5}
        />
        )
      }
        
        {/* <Marker
            coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
            }}
            title='Titulo'
            description='Cuerpo'
            image={require("../../../assets/Marcador.png")}
        />  */}
    </MapView>
    <FAB
      icono={mostrarPolilínea ? 'eye-outline' : 'eye-off-outline'}
      onPress={()=> setMostrarPolilínea(!mostrarPolilínea)}
      estilo={{
        bottom:140,
        right:20
      }}
    />
    <FAB
      icono={siguiendoUsuario ? 'walk-outline' : 'accessibility-outline'}
      onPress={()=> setSiguiendoUsuario(!siguiendoUsuario)}
      estilo={{
        bottom:80,
        right:20
      }}
    />
    <FAB
      icono='compass-outline'
      onPress={()=> moverUbicacionActual()}
      estilo={{
        bottom:20,
        right:20
      }}
    />
   </>
  )
}