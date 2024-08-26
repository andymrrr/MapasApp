import { openSettings, PERMISSIONS, PermissionStatus, request } from "react-native-permissions";
import { PermisoEstatus } from "../../infraestructura/Interface/Permiso"
import { Platform } from "react-native";

export const SolicitarPermisoUbicacion = async(): Promise<PermisoEstatus>=>{
    let Estatus : PermissionStatus = 'unavailable';

    if(Platform.OS ==="ios"){
        Estatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    }
    else if (Platform.OS ==="android") {
        Estatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }
    else{
        throw new Error("Plataforma no Soportada")
    }

    if(Estatus ==="blocked")
    {
        await openSettings()
        return await ComprobarPermisoUbicacion()
    }

    const permisoMapeo: Record<PermissionStatus,PermisoEstatus> ={
        granted:"granted",
         blocked:"blocked",
         denied: "denied",
         limited:"limited",
         unavailable:"unavailable"
    } 

    return permisoMapeo[Estatus] ?? "unavailable"

}

export const ComprobarPermisoUbicacion = async (): Promise<PermisoEstatus> => {
    let Estatus : PermissionStatus = 'unavailable';

    if(Platform.OS ==="ios"){
        Estatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    }
    else if (Platform.OS ==="android") {
        Estatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }
    else{
        throw new Error("Plataforma no Soportada")
    }
    const permisoMapeo: Record<PermissionStatus,PermisoEstatus> ={
        granted:"granted",
         blocked:"blocked",
         denied: "denied",
         limited:"limited",
         unavailable:"unavailable"
    } 

    return permisoMapeo[Estatus] ?? "unavailable"
}