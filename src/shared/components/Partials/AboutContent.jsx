const AboutContent = () => {
    return (
        <div className="about-nav">
        <input type="checkbox" className="about-nav-checkbox"  
        id="about-navi-checkbox-toggle"/>

        <label for="about-navi-checkbox-toggle" className="about-nav-btn">
          <InfoOutlinedIcon className='material-icons about-btn'/>
        </label>

        <div className="about-nav-nav">
        <div className="about-nav-bg">&nbsp;</div>

            <div class="about-nav-content">
                <p className="about-nav-list">
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
            </div>
        </div>

        </div>
    )
  }
  
  export default AboutContent