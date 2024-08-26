import { create } from 'zustand';
import { Ubicacion } from '../../infraestructura/Interface/Ubicacion';
import { BuscarUbicacionActual, LimpiarMostrarubicacion, MostrarUbicacionActual } from '../../Acciones/Ubicacion/Ubicacion';

interface EstadoUbicacion {
    UltimaUbicacionConocida: Ubicacion | null;
    historialUbicacionUsuario: Ubicacion[];
    idUbicacion: number | null


    BuscarUbicacion: () => Promise<Ubicacion | null>;
    VerUbicacion: ()=> void;
    LimpiarVerUbicacion: ()=> void; 
}

export const UsarUbicacionStore = create<EstadoUbicacion>()( (set, get) => ({
    UltimaUbicacionConocida: null,
    historialUbicacionUsuario: [],
    idUbicacion: null,

    BuscarUbicacion: async () =>{
        const ubicacion = await BuscarUbicacionActual()
        set({UltimaUbicacionConocida: ubicacion})

        return ubicacion;
    },

    VerUbicacion: async ()=>{
        const ubicacionId = get().idUbicacion;
        if(ubicacionId !== null)
        {
            get().LimpiarVerUbicacion()
        }
        const id = MostrarUbicacionActual((ubicacion) => {
            set({
                UltimaUbicacionConocida: ubicacion,
                historialUbicacionUsuario: [...get().historialUbicacionUsuario, ubicacion]
            })
        })

        set({idUbicacion: ubicacionId})

    },
    LimpiarVerUbicacion: ()=>{
        const ubicacionId = get().idUbicacion;
        if(ubicacionId !== null)
        {
            LimpiarMostrarubicacion(ubicacionId)
        }

    }

}))