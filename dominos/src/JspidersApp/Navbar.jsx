import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <React.Fragment>
        <nav className="navbar navbar-dark navbar-expand-sm m-0" style={{"background":"black"}}>
                <div className="container">
                    <h1 className="navbar-brand"><NavLink to='/'>Jspiders</NavLink></h1>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item nav-link hover text-white"><NavLink to='/cont'>Contact</NavLink></li>
                            <li className="nav-item nav-link hover text-white"><NavLink to='/admin'>Admin</NavLink></li>
                            <li className="nav-item nav-link hover text-white">/</li>
                            <li className="nav-item nav-link hover text-white"><NavLink to='/cont'>User</NavLink></li>

                        </ul>
                    </div>
                </div>
            </nav>
    </React.Fragment>
  )
}

export default Navbar;