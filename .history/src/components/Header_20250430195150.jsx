import { useState } from "react"
import styles from './Header.module.css'

const Header = () => {

    const [open, setOpen] = useState(false)

    return (
        <header className={styles.header}>
            

                <div id={styles.ls}>
                    <a>
                        <img src='/coding.png' alt="Code logo" width={70}/>
                    </a>
                    <h2> DevSync </h2>
                </div>


                <button className={styles['toggle-menu']} onClick={() => setOpen(!open)}>
                    ☰
                </button>

                <nav className={`${styles['nav-links']} ${open ? styles.open : ''}`}>
                    <a href="goole.com" className={styles['fake-button']}>Features</a>
                    <a href="goole.com" className={styles['fake-button']}>Login</a>
                    <a href="goole.com" className={styles['fake-button']}>SignUp</a>
                </nav>
        </header>
    )
}

export default Header