import css from "../../global.css";
import Footer from "./Footer/Footer";

const Layout = ({pageTitle, children}) => {
    return (
        <div>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout