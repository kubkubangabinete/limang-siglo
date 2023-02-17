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
                    5Siglo, pronounced as Limang Siglo, is an interactive
                    web primer primarily focused on the conditions of the
                    Filipino peasantry before and throughout the 500 years 
                    of colonialism and resistance in the Philippines.
                </p>
            </div>
        </div>

        </div>
    )
  }
  
  export default AboutContent