import { ReactComponent as Logo1 } from '../assets/button1.svg';
import { ReactComponent as Logo2 } from '../assets/button2.svg';
import { ReactComponent as Logo3 } from '../assets/button3.svg';
import { ReactComponent as Logo4 } from '../assets/button4.svg';
import './links.css';

function Links() {

  return (
    <div className="buttonLinks">

      <div className="homeButton">
        <a href="https://nfcnyc.org">
          <Logo1 className='buttonLogo' />NFC Home Page
        </a>
      </div>

      <div className="bulletinButton">
        <a href="https://nfcnyc.org/ko/announcements">
          <Logo2 className='buttonLogo' />Weekly Bulletin
        </a>
      </div>

      <div className="youtubeButton">
        <a href="https://www.youtube.com/@NewFrontierChurchNYC">
          <Logo3 className='buttonLogo' />YouTube
        </a>
      </div>

      <div className="instaButton">
        <a href="https://www.instagram.com/nfc.nyc/">
          <Logo4 className='buttonLogo' />Instagram
        </a>
      </div>

    </div>
  )
}

export default Links;