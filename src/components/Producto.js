import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { eliminarProductoAction, getProductoEditarAction } from "../actions/productoActions"
import Swal from "sweetalert2"

const Producto = ({producto}) => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleDelete = id => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Una vez eliminado no se podrá recuperar",
      showCancelButton: true,
      icon: 'warning',
      confirmButtonText: 'Eliminar',
      cancelButtonText: `Cancelar`,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const eliminarProducto = () => dispatch(eliminarProductoAction(id))
        eliminarProducto()
        
      }
    })
  }

  const redireccionarEdit = producto => {
    dispatch(getProductoEditarAction(producto))
    navigate(`/productos/editar/${producto.id}`)
  }

  return (
    <tr>
        <td>{producto.nombre}</td>
        <td><span className='font-weight-bold'>{producto.precio} €</span></td>
        <td className='acciones'>
            <button type="button" className="btn btn-primary mr-2" onClick={() => redireccionarEdit(producto)}>Editar</button>
            <button type="button" className="btn btn-danger" onClick={() => handleDelete(producto.id)}>Eliminar</button>
        </td>
    </tr>
  )
}

export default Producto