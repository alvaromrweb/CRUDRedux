import { useDispatch, useSelector } from "react-redux"
import { editarProductoAction } from "../actions/productoActions"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const EditarProducto = () => {

    const [producto, setProducto] = useState({
        nombre: '',
        precio: ''
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const productoeditar = useSelector( state => state.productos.productoeditar )
    
    useEffect(() => {
      setProducto(productoeditar)
    }, [productoeditar])
    

    const onChangeForm = e => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    const editarProducto = producto => dispatch(editarProductoAction(producto))

    const handleSubmit = e => {
        e.preventDefault()

        if(producto.nombre.trim() === '' || producto.precio <= 0){
            return
        }

        editarProducto(producto)

        navigate('/')

    }

  return (
    <div className='row justify-content-center'>
        <div className='col-md-8'>
            <div className='card'>
                <div className='card-body'>
                    <h2 className='text-center mb-4 font-weight-bold'>Editar producto</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label>Nombre producto</label>
                            <input type="text" name="nombre" placeholder="Nombre producto" className='form-control' value={producto.nombre} onChange={onChangeForm}/>
                        </div>
                        <div className='form-group'>
                            <label>Precio producto</label>
                            <input type="number" name="precio" placeholder="Precio producto" className='form-control' value={producto.precio} onChange={onChangeForm}/>
                        </div>
                        <button type='submit' className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>Guardar cambios</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditarProducto