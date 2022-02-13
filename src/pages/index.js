
import * as home from "./home.module.css"
import {Link} from "gatsby"


//does not need to wrap layout manually - done through gatsby-browser.js
const IndexPage = () => {
  return (
    <div className={home.container}>
      <div className={home.rain}>
        <div className={home.drop}></div>
        {/* <div className={home.waves}>
          <div></div>
          <div></div>
        </div> */}
        <div className={home.namecard}>
          <p className={home.name}>
            Chris Teng
          </p>
          <p className={home.quote}>
            Do more with less
          </p>
        </div>
      </div>
      <div className={home.links}>
        <a href="https://www.linkedin.com/in/ch-teng" target="_blank"><div className={home.LinkedIn}>LinkedIn</div></a>
        <a href= "https://github.com/ch-teng" target="_blank"><div className={home.GitHub}>GitHub</div></a>
        <Link to="/resume"><div className={home.Resume}>Resume</div></Link>
        <div className={home.PersonalEmail} onClick={() => {navigator.clipboard.writeText("Chris.R.Teng@gmail.com"); alert("Chris.R.Teng@gmail.com has been copied to clipboard")}}>
          <span className={home.DisplayedEmail}>Personal Email</span> 
          <span className={home.EmailClicked}>Copied To Clipboard!</span>
          </div>
        
      </div>
    </div>
  )
}

export default IndexPage
