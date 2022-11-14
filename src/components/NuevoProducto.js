import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

// Actions de Redux
import { CrearProductoAction } from "../actions/productoActions"
import { mostrarAlerta, ocultarAlertaAction } from "../actions/alertaActions"

const NuevoProducto = () => {

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState(0)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const cargando = useSelector( state => state.productos.loading )
    const error = useSelector( state => state.productos.error )
    const alerta = useSelector( state => state.alerta.alerta )

    const agregarProducto = producto => dispatch(CrearProductoAction(producto))

    const submitNuevoProducto = e => {
        e.preventDefault()

        dispatch(ocultarAlertaAction())

        if(nombre.trim() === '' || precio <= 0){
            const alerta = {
                msg: 'Todos los campos son obligatorios',
                classes: 'alert alert-danger text-uppercase text-center p3'
            }
            dispatch(mostrarAlerta(alerta))
            return
        }

        agregarProducto({
            nombre,
            precio
        })

        navigate('/')
    }

  return (
    <div className='row justify-content-center'>
        <div className='col-md-8'>
            <div className='card'>
                <div className='card-body'>
                    <h2 className='text-center mb-4 font-weight-bold'>Agregar nuevo producto</h2>
                    <form onSubmit={submitNuevoProducto}>
                        <div className='form-group'>
                            <label>Nombre producto</label>
                            <input type="text" name="nombre" placeholder="Nombre producto" className='form-control' value={nombre} onChange={e => setNombre(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Precio producto</label>
                            <input type="number" name="precio" placeholder="Precio producto" className='form-control' value={precio} onChange={e => setPrecio(Number(e.target.value))} />
                        </div>
                        {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null}
                        <button type='submit' className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>Agregar</button>
                    </form>

                    {cargando && <p>Cargando...</p>}
                    {error && <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default NuevoProducto