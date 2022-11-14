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
    EDITAR_PRODUCTO,
    EDITAR_PRODUCTO_EXITO,
    EDITAR_PRODUCTO_ERROR
 } from "../types"

 import clienteAxios from "../config/axios"
 import Swal from "sweetalert2"

 // Crear nuevos productos
 export function CrearProductoAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto())
        try {
            await clienteAxios.post('/productos', producto)
            dispatch(agregarProductoExito(producto))
            Swal.fire({
                title: 'Exito',
                text: 'Se ha agregado el producto correctamente',
                icon: 'success',
                confirmButtonText: 'OK'
              })
        } catch (error) {
            
            dispatch(agregarProductoError(true))
            Swal.fire({
                title: 'Error',
                text: 'Hubo un error al agregar el producto',
                icon: 'error',
                confirmButtonText: 'Cerrar'
            })
        }
    }
 }

 const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO
 })

 const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
 })

 const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
 })

 // Obtener lista de productos
 export function getProductosAction() {
    return async (dispatch) => {
        dispatch(getProductos())
        try {
            const respuesta = await clienteAxios.get('/productos')
            dispatch(getProductosExito(respuesta.data))
        } catch (error) {
            dispatch(getProductosError())
            
        }
    }
 }

 const getProductos = () => ({
    type: GET_PRODUCTOS,
    payload: true
 })

 const getProductosExito = productos => ({
    type: GET_PRODUCTOS_EXITO,
    payload: productos
 })

 const getProductosError = () => ({
    type: GET_PRODUCTOS_ERROR,
    payload: true
 })

 // Eliminar producto
 export function eliminarProductoAction(id) {
    return async (dispatch) => {
        dispatch(eliminarProducto(id))
        try {
         console.log(id)
            await clienteAxios.delete(`/productos/${id}`)
            dispatch(eliminarProductoExito())
            Swal.fire({
               title: 'Eliminado',
               text: 'Se eliminado el producto correctamente',
               icon: 'success'
             })
        } catch (error) {
            dispatch(eliminarProductoError())
            
        }
    }
 }

 const eliminarProducto = id => ({
    type: ELIMINAR_PRODUCTO,
    payload: id
 })

 const eliminarProductoExito = () => ({
    type: ELIMINAR_PRODUCTO_EXITO
 })

 const eliminarProductoError = () => ({
    type: ELIMINAR_PRODUCTO_ERROR,
    payload: true
 })
 
 // Obtener lista de productos
 export function getProductoEditarAction(producto) {
   return async (dispatch) => {
       dispatch(getProductoEditar(producto))
   }
}

const getProductoEditar = producto => ({
   type: GET_PRODUCTO_EDITAR,
   payload: producto
})

 // Editar producto
 export function editarProductoAction(producto) {
   return async (dispatch) => {
       dispatch(editarProducto())
       try {
         await clienteAxios.put(`/productos/${producto.id}`, producto)
         dispatch(editarProductoExito(producto))
         Swal.fire({
               title: 'Exito',
               text: 'Se ha editado el producto correctamente',
               icon: 'success',
               confirmButtonText: 'OK'
            })
       } catch (error) {
         dispatch(editarProductoError())
       }
   }
}

const editarProducto = () => ({
   type: EDITAR_PRODUCTO
})

const editarProductoExito = producto => ({
   type: EDITAR_PRODUCTO_EXITO,
   payload: producto
})

const editarProductoError = () => ({
   type: EDITAR_PRODUCTO_ERROR,
   payload: true
})