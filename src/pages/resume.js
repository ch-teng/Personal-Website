import * as css from "./resume.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Resume from '../downloads/ChrisTengResume.pdf'
const ResumePage = () => {
    return (
        <>
        <div className={css.structure}>
            <StaticImage src ="../images/TengResume.jpg" className={css.img}></StaticImage> 
        </div>
        <div className={css.links}>
            <Link to="/"><div className={css.home}>Return Home</div></Link>
            <a href={Resume} download>
                <div className={css.download}> Download PDF</div>    
            </a>
            
        </div>
        </>
    )
    
}
 
export default ResumePage