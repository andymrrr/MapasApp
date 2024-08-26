import Geolocation from '@react-native-community/geolocation';
import { Ubicacion } from '../../infraestructura/Interface/Ubicacion';

export const BuscarUbicacionActual = async(): Promise<Ubicacion>=>{

   return new Promise((resolve, rejected) => {
        Geolocation.getCurrentPosition(info=> {
            resolve({
                latitude: info.coords.latitude,
                longitude: info.coords.longitude
            })
        }, (error) => {
            console.log(`Ubicacion: ${error}`)
            rejected(error)
        },{
            enableHighAccuracy:true
        }
    )
   })
}

export const MostrarUbicacionActual = (funcionUbicacion : (ubicacion: Ubicacion)=> void ) : number => {
 return Geolocation.watchPosition(info =>{
    funcionUbicacion({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude
    })
 },(error) =>{
    console.log(`Ubicacion: ${error}`)
    throw new Error("No se pudo obtner la ubicacion")
 },{
    enableHighAccuracy: true
 })
}

export const LimpiarMostrarubicacion = (id: number)=> {
    Geolocation.clearWatch(id)
}