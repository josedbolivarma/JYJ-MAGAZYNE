import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesProductos } from "../types/types";


//---------------listar----------------//
export const listAsync = () => {
    return async (dispatch) => {
        const collectionTraer = await getDocs(collection(db, "productosDB"));
        const productos = [];
        collectionTraer.forEach((doc) => {
            productos.push({
                ...doc.data()
            })
        })
        dispatch(listSync(productos));
    }
}

export const listSync = (productos) => {
    return {
        type: typesProductos.list,
        payload: productos
    }
}