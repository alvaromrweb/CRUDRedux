import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>
        <div className='container'>
            <Link to="/" className="text-decoration-none"><h1>CRUD - React, Redux, REST API & Axios</h1></Link>
            <Link to="/productos/nuevo" className='btn btn-danger nuevo-post d-block d-md-inline-block'>Agregar producto &#43;</Link>
        </div>
    </nav>
  )
}

export default Header