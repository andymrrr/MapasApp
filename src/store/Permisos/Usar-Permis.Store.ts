import { create } from "zustand";
import { PermisoEstatus } from "../../infraestructura/Interface/Permiso";
import { ComprobarPermisoUbicacion, SolicitarPermisoUbicacion } from "../../Acciones/Permiso/PermisoUbicacion";

interface EstadoPermiso {
    ubicacionEstatus: PermisoEstatus;
    solicitarPermisoUbicacion: ()=> Promise<PermisoEstatus>;
    ComprobarPermisoUbicacion: ()=> Promise<PermisoEstatus>;
}
export const UsarPermisoStore = create<EstadoPermiso>()(set => ({
    ubicacionEstatus:"undetermined",

    solicitarPermisoUbicacion: async()=> {
        const estatus = await SolicitarPermisoUbicacion();
        set({ubicacionEstatus: estatus})
        return estatus
    },
    ComprobarPermisoUbicacion: async()=> {
        const estatus = await ComprobarPermisoUbicacion();
        set({ubicacionEstatus: estatus})
        return estatus
    }
}))