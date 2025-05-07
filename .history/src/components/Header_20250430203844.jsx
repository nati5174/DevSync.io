import { useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {

    const [open, setOpen] = useState(false)

    return (
        <header>
            

                <div id='ls'>
                    <a>
                        <img src='/coding.png' alt="Code logo" width={70}/>
                    </a>
                    <h2> DevSync </h2>
                </div>


                <button className = "toggle-menu" onClick={() => setOpen(!open)}>
                    ☰
                </button>

                <nav className = {`nav-links ${open ? 'open' : ''}`}>
                    <Link href="goole.com" className='fake-button'>Features</Link>
                    <Link  to='/login' href="goole.com" className='fake-button'>Login</Link>
                    <Link  to='/login' className='fake-button'> SignUp</Link>
                </nav>
        </header>
    )
}

export default Header