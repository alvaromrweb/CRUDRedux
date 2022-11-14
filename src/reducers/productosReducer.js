import { 
    AGREGAR_PRODUCTO, 
    AGREGAR_PRODUCTO_EXITO, 
    AGREGAR_PRODUCTO_ERROR,
    GET_PRODUCTOS,
    GET_PRODUCTOS_EXITO,
    GET_PRODUCTOS_ERROR,
    ELIMINAR_PRODUCTO,
    ELIMINAR_PRODUCTO_EXITO,
    ELIMINAR_PRODUCTO_ERROR,
    GET_PRODUCTO_EDITAR,
    EDITAR_PRODUCTO_EXITO,
    EDITAR_PRODUCTO_ERROR
 } from "../types"

// cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: false,
    loading: false,
    productoeliminar: null,
    productoeditar: null
}

export default function(state = initialState, action) {
    switch (action.type) {
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                loading: true
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false,
                productos: [...state.productos, action.payload]
            }
        case AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_PRODUCTOS:
            return {
                ...state,
                loading: action.payload
            }
        case GET_PRODUCTOS_EXITO:
            return {
                ...state,
                productos: action.payload,
                error: null,
                loading: false
            }
        case GET_PRODUCTOS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ELIMINAR_PRODUCTO:
            return {
                ...state,
                productoeliminar: action.payload
            }
        case ELIMINAR_PRODUCTO_EXITO:
            return {
                ...state,
                productos: state.productos.filter(producto => producto.id !== state.productoeliminar),
                productoeliminar: null
            }
        case ELIMINAR_PRODUCTO_ERROR:
            return {
                ...state,
                error: true
            }
        case GET_PRODUCTO_EDITAR:
            return {
                ...state,
                productoeditar: action.payload
            }
        case EDITAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false,
                productos: state.productos.map(producto => 
                    producto.id === action.payload.id ? producto = action.payload : producto
                    ),
                productoeditar: null
            }
        case EDITAR_PRODUCTO_ERROR:
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                }
        default:
            return state
    }
}