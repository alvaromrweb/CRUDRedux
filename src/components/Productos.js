import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProductosAction } from "../actions/productoActions"
import Producto from "./Producto"

const Productos = () => {

  const dispatch = useDispatch()


  
  useEffect(() => {
    const cargarProductos = () => dispatch(getProductosAction())
    cargarProductos()
  }, [])
  
  const productos = useSelector( state => state.productos.productos )
  const cargando = useSelector( state => state.productos.loading )
  const error = useSelector( state => state.productos.error )
  
  return (
    <Fragment>
        <h2 className="text-center my-5">Listado de productos</h2>

        {error && <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p>}

        {cargando && <p className="text-center">Cargando...</p>}

        <table className="table table-striped">
            <thead className="bg-primary table-dark">
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {productos.length <= 0 ? 'No hay productos' : (
                  productos.map(producto => (
                    <Producto key={producto.id} producto={producto} />
                  ))
                )}
            </tbody>
        </table>
    </Fragment>
  )
}

export default Productos