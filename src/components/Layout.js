import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";

const Layout = ({pageTitle, children}) => {
    return (
        <div>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout