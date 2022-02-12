import {Link} from "gatsby";


const navBar = () => {
    return (
        <div className="navOptions">
            <Link href ="/"><strong>Home</strong></Link>
            <Link href ="/resume"><strong>Resume</strong></Link>
        </div>
    )
}