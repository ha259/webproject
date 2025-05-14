import { Link, Outlet } from "react-router-dom"

import "./navbar.css"



function Navbar() {
  

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid z-3">
                    <Link to='/' className="navbar-brand" href=""><img src="/icon.png" alt="Logo" width="160" height="65" className="d-inline-block align-text-top" /></Link>
                    <button className=" navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item  me-4 mt-2 " >
                                <Link to='/' className="nav-link active nl " aria-current="page" >Home</Link>
                            </li>
                            <li class="nav-item me-4  mt-2" >
                                <Link to='aboutus/about' className="nav-link active nl" aria-current="page" >About Us</Link>
                            </li>
                            <li class="nav-item me-4 mt-2" >
                                <Link to='/events/eventspage' className="nav-link active nl " aria-current="page"  >Events</Link>
                            </li>
                            <li class="nav-item  me-4 mt-2" >
                                <Link to='/members/members' className="nav-link active nl" aria-current="page" >Members</Link>
                            </li>
                            <li class="nav-item mt-2 mb-1">
                                <Link to='/contact/contactpage' className="nav-link active  nl " aria-current="page" >contact</Link>
                            </li>

                        </ul>
                        <div className="d-flex bl" role="search">
                            <Link to='/login'><button className="button">Login</button></Link>
                        </div>
                    </div>
                </div>

            </nav>
            <div>
                <Outlet />
            </div>
        </>

    )
}

export default Navbar