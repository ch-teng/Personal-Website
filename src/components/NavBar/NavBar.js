import {Link} from "gatsby";

import * as css from "./NavBar.module.css"

const NavBar = () => {
    return (

        <nav className={css.topNav}>
            <Link to ="/"><strong>Home</strong></Link>
            <Link to ="/resume"><strong>Resume</strong></Link>
        </nav>
    )
}
export default NavBar;