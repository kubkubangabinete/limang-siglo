import { Link } from 'react-router-dom';
import React, { useState } from "react";
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import AudioButton from './AudioButton';
import rotateDeviceIcon from '/src/assets/rotate-device.svg';
import TabsContent from './TabsContent';
import ChaptersDirectoryPage from '../../../pages/ChaptersDirectoryPage';


const Header = () => {

  const [checked, setChecked] = useState(false);
  const [hidden, setHidden] = useState(false);

  return (
    <div>
      <div className="nav-header">
        {/* Home Button */}
        <div className="left-header">
          <Link to="/">
            <HomeRoundedIcon className='material-icons home-btn' />
          </Link>
        </div>

        {/* Hamburger Button */}
        <div className="right-header">
          <input type="checkbox" id="checkbox_toggle" checked={checked}
            onChange={(e) => setChecked(e.target.checked)} />
          <label for="checkbox_toggle" class="ham">
            <MenuIcon className='material-icons ham-btn' />
          </label>

          {/* Menu */}
          <div className="menu">

            {/* Notebook Button */}

            <a className='menu-element-i'>
              <label for="ntbk-checkbox-toggle" className="ntbk-btn">
                <ImportContactsOutlinedIcon className='material-icons ntbk-icon' />
              </label>
            </a>

            {/* Audio Button */}
            <a className='menu-element-ii'>
              <AudioButton />
            </a>

            {/* About Button */}
            <a className='menu-element-iii' onClick={() => setHidden(true)}>
              <label for="about-navi-checkbox-toggle" className="about-nav-btn">
                <InfoOutlinedIcon className='material-icons about-btn' />
              </label>
            </a>

          </div> {/* menu*/}

        </div> {/* right-header*/}


      </div> {/* nav-header*/}


      {/* Footer 1 (Chapters Directory) */}
      <div className="footer">
        <label for="chd-checkbox-toggle">
        <button className="chapters-btn">Chapters</button>
        </label>
      </div>

      {/* About Button 2 */}
      <div className="about-nav">
        <input type="checkbox" className="about-nav-checkbox" id="about-navi-checkbox-toggle" />

        <label for="about-navi-checkbox-toggle" className="about-nav-btn-alt" onClick={() => setChecked((c) => !c)}>
          <InfoOutlinedIcon className='material-icons about-btn-alt' />
        </label>

        <div className="about-nav-bg">&nbsp;</div>

        <p className="about-nav-list">
          <h1 className='header-title'>about 5Siglo</h1>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit,
          sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
      </div> {/* about-nav*/}

      {/* Rotate Device */}
      <div className='rotate-device-overlay'>
        <div className='rotate-device-container'>
          <img src={rotateDeviceIcon} className='rotate-device-icon' />
          <p className='rotate-device-text'>Rotate device for better experience</p>
        </div>
      </div>

     
      
      
      {/* Notebook */}
      <input type="checkbox" id="ntbk-checkbox-toggle" className="ntbk-checkbox" />
      <div className="ntbk-overlay">
        <label for="ntbk-checkbox-toggle" className='ntbk-overlay-close'></label>
     </div>



 {/* Footer 2 (Chapters Directory) */}
 <input type="checkbox" id="chd-checkbox-toggle" className="chd-checkbox" />
 <div className="chd-overlay">
        <label for="chd-checkbox-toggle" className='chd-overlay-close'></label>
     </div>


     <TabsContent />
     <ChaptersDirectoryPage />
    </div>



  )
}

export default Header