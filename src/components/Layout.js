import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";

const Layout = ({pageTitle, children}) => {
    return (
        <div>
            <NavBar/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout