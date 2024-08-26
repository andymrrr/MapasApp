import { StyleSheet } from "react-native";
export const Colores ={
    negro: "black",
    blanco: "white"
}

export const estiloGlobal = StyleSheet.create({
    texto:{
        color: Colores.negro

    },
    btnPrimario:{
        backgroundColor: Colores.negro,
        paddingVertical: 10,
        paddingHorizontal:20,
        borderRadius:100,
        margin:10
    }
})