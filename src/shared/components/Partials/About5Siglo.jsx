const About5Siglo = () => {
  return (
    <div className="about-website">
      <h1 className="header-title about-header-title">about 5Siglo</h1>
      <p>
        5Siglo, pronounced as Limang Siglo, is an interactive web primer
        primarily focused on the conditions of the Filipino peasantry before and
        throughout the 500 years of colonialism and resistance in the
        Philippines.
      </p>
      <p>
        Interesting in learning more about the peasantry? Go check out our
        animated explainer video below!
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/BEXl_EdQk1Y?"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  modestbranding"
        allowfullscreen
        className="explainer-video"
      ></iframe>
    </div>
  );
};

export default About5Siglo;
