import React from 'react'
import { nav } from './Navdata'
import { Link } from 'react-router-dom'
import img from "../../img/product.png";

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: '#343a40', padding: '15px' }} className="navbar navbar-expand-lg navbar-dark">
            <div className="img me-4" style={{ width: '8%' }}>
                <img src={img} alt="Product" style={{ width: '100%' }} />
            </div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {
                        nav.map((val, ind) => {
                            return (
                                <li className="nav-item active" key={ind}>
                                    <Link to={`${val.path}`} className="nav-link" style={{ color: '#fff' }}>{val.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
