
import * as rain from "./rain.module.css"
import {Link} from "gatsby"


//does not need to wrap layout manually - done through gatsby-browser.js
const IndexPage = () => {
  return (
    <div className={rain.container}>
      <div className={rain.rain}>
        <div className={rain.drop}></div>
        {/* <div className={rain.waves}>
          <div></div>
          <div></div>
        </div> */}
        <div className={rain.namecard}>
          <p className={rain.name}>
            Chris Teng
          </p>
          <p className={rain.quote}>
            Do more with less
          </p>
        </div>
      </div>
      <div className={rain.links}>
        <a href="www.linkedin.com/in/ch-teng"><div className={rain.LinkedIn}>LinkedIn</div></a>
        <a href= "https://github.com/ch-teng"><div className={rain.GitHub}>GitHub</div></a>
        <Link to="/resume"><div className={rain.Resume}>Resume</div></Link>
        <div className={rain.PersonalEmail} onClick={() => {navigator.clipboard.writeText("Chris.R.Teng@gmail.com"); alert("Chris.R.Teng@gmail.com has been copied to clipboard")}}>
          <span className={rain.DisplayedEmail}>Personal Email</span> 
          <span className={rain.EmailClicked}>Copied To Clipboard!</span>
          </div>
        
      </div>
    </div>
  )
}

export default IndexPage
