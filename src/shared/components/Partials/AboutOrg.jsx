import umaLogo from "../../../assets/umaLogo.svg";

const AboutOrg = () => {
  return (
    <div className="about-org">
      <div className="uma-logo-container">
        <img src={umaLogo} className="uma-logo" alt="UMA Logo" />
      </div>
      <div>
        <h1 className="header-title about-header-title">the organization</h1>
        <p>
          Unyon ng Manggagawa sa Agrikultura (UMA) or National Federation of
          Agricultural Workers is the national progressive center of unions,
          federations, and organizations of agricultural workers in the
          Philippines.
        </p>
        <p>
          UMA is a member of the Asian Peasant Coalition (APC) and the
          International League of Peoples’ Struggles (ILPS).
        </p>
      </div>
    </div>
  );
};

export default AboutOrg;
