import React, { useState } from "react";
import sampleLandscape from "../../../assets/chii-sample1.png";
import Ch3Info from "./Ch3Info";

const Plight = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modelRef = React.useRef();
  return (
    <div>
      <div className="prec-1">
        <div className="chiii-text-wrapper">
          <h1 className="page-header-title">
            chapter3
            <sup>
              <button className="about-ch" onClick={() => setIsOpen(true)}>
                ?
              </button>
            </sup>
          </h1>
          <p className="page-header-subtitle">plight of the peasantry</p>
        </div>

        <Ch3Info open={isOpen} onClose={() => setIsOpen(false)} />
      </div>

      <div className="plight-carousel">
        <a className="plight-carousel__skip-link" href="#plight-skip-link">
          Skip the plight-Carousel
        </a>
        <div className="plight-slides">
          <div
            className="plight-slides-item plight-slide-1"
            id="plight-slide-1"
            aria-label="slide 1 of 10"
            tabIndex="0"
          >
            <div className="plight-card-image">
              <img
                className="plight-card-image-img"
                src="https://media.giphy.com/media/FTttO6GosqxuvvsMHn/giphy.gif"
              />
            </div>
            <div className="plight-card-modal-container">
              <div className="plight-card-modal-p-container">
                <h2 className="plight-card-modal-h3">Landlessness</h2>
                <p className="plight-card-modal-p">
                  At least 7 out of 10 farmers are landless and do not own the
                  land they till. For a farmer, losing their land is like losing
                  their basic right to existence.
                </p>
                <p className="plight-card-modal-p">
                  The lack of access to land has resulted in the proliferation of informal
                  settlements and urban slums, where people live in substandard
                  housing and lack access to basic services such as water and
                  sanitation.
                </p>
                <p className="plight-card-modal-p">
                  One of the main causes of landlessness in the Philippines is
                  the concentration of land ownership in the hands of a few
                  wealthy families, who have the resources and influence to
                  maintain their control over large tracts of land. 
                </p>
                <p className="plight-card-modal-p">
                  Giving peasants ownership of the land they work on could help
                  to solve this problem. It would give them more control over
                  their work environment and the ability to invest in their own
                  farms. This could lead to greater stability, increased
                  productivity, and improved livelihoods for Filipino peasants.
                </p>
              </div>
            </div>
          </div>

          <div
            className="plight-slides-item plight-slide-2"
            id="plight-slide-2"
            aria-label="slide 2 of 10"
            tabIndex="0"
          >
            <div className="plight-card-image">
              <img
                className="plight-card-image-img"
                src="https://media.giphy.com/media/sq9TLxv9OIV6G79nb9/giphy.gif"
              />
            </div>
            <div className="plight-card-modal-container">
              <div className="plight-card-modal-p-container">
                <h2 className="plight-card-modal-h3">Land Monopoly</h2>
                <p className="plight-card-modal-p">
                  Today, peasants are still forced to give up their lands
                  because of the conversion of agricultural lands to commercial
                  use. Many are evicted from their lands through military means
                  and anti-peasant laws and policies.
                </p>
                <p className="plight-card-modal-p">
                  In many cases, there are peasants who are the owners of their
                  lands as declared on paper, yet the agribusinesses are always
                  the ones who control and benefit from them. Peasants cannot
                  also grow their own crops on abandoned commercial lands they
                  used to work on, do not have the autonomy to choose which
                  types of crops and agricultural inputs to use, and are forced
                  to buy and use expensive environment- and health-damaging
                  foreign imports of agricultural inputs.
                </p>
              </div>
            </div>
          </div>
          <div
            className="plight-slides-item plight-slide-3"
            id="plight-slide-3"
            aria-label="slide 3 of 10"
            tabIndex="0"
          >
            <div className="plight-card-image">
              <img
                className="plight-card-image-img"
                src="https://media.giphy.com/media/uzrHKx47ihF4lQb0aC/giphy.gif"
              />
            </div>
            <div className="plight-card-modal-container">
              <div className="plight-card-modal-p-container">
                <h2 className="plight-card-modal-h3">Food Insecurity</h2>
                <p className="plight-card-modal-p">
                  The ever-expansion of land monopoly among big landlords and
                  agribusinesses are a threat to the food security of Filipinos,
                  especially the peasants. Export crops have taken over and far
                  exceeded the rice and corn farms, which the peasants mainly
                  depend on for food and sustenance.
                </p>
                <p className="plight-card-modal-p">
                  In addition to this, the influx of imported expensive
                  agricultural products have taken a toll on their livelihoods
                  and food as they end up earning next to nothing.
                </p>
              </div>
            </div>
          </div>
          <div
            className="plight-slides-item plight-slide-4"
            id="plight-slide-4"
            aria-label="slide 4 of 10"
            tabIndex="0"
          >
            <div className="plight-card-image">
              <img
                className="plight-card-image-img"
                src="https://media.giphy.com/media/GzSaTt5YK9xGw6aVy1/giphy.gif"
              />
            </div>
            <div className="plight-card-modal-container">
              <div className="plight-card-modal-p-container">
                <h2 className="plight-card-modal-h3">Low Wages</h2>
                <p className="plight-card-modal-p">
                  Peasants in the Philippines often face low wages, which can
                  make it difficult to make ends meet. Many agricultural workers
                  in the Philippines are not even paid the minimum wage, as some
                  employers are able to exploit loopholes in the law. This can
                  lead to further economic hardship for workers, particularly
                  those who are already living in poverty.
                </p>
              </div>
            </div>
          </div>
          <div
            className="plight-slides-item plight-slide-5"
            id="plight-slide-5"
            aria-label="slide 5 of 10"
            tabIndex="0"
          >
            <div className="plight-card-image">
              <img
                className="plight-card-image-img"
                src="https://media.giphy.com/media/Xev9ybCo8Nlo5QrxOs/giphy.gif"
              />
            </div>
            <div className="plight-card-modal-container">
              <div className="plight-card-modal-p-container">
                <h2 className="plight-card-modal-h3">High Land Rent</h2>
                <p className="plight-card-modal-p">
                  Peasants in the Philippines often face high land rent costs
                  that can be financially burdensome. In many cases, these costs
                  are so high that peasants are forced to take out loans just to
                  pay for them. This perpetuates a cycle of debt that can be
                  difficult to break, as the high cost of land rent leaves
                  peasants with little money to invest in their farms or improve
                  their living conditions. As a result, many peasants struggle
                  to make ends meet and are at risk of losing their land if they
                  are unable to keep up with the rent payments.
                </p>
              </div>
            </div>
          </div>
          <div
            className="plight-slides-item plight-slide-6"
            id="plight-slide-6"
            aria-label="slide 6 of 10"
            tabIndex="0"
          >
            <div className="plight-card-image">
              <img
                className="plight-card-image-img"
                src="https://media.giphy.com/media/fZgaDnsLftBgD6LQIQ/giphy.gif"
              />
            </div>
            <div className="plight-card-modal-container">
              <div className="plight-card-modal-p-container">
                <h2 className="plight-card-modal-h3">
                  High Loan and Tax Interest Rates
                </h2>
                <p className="plight-card-modal-p">
                  The high loan and tax interest rates in the Philippines have
                  been a major concern for the peasantry, who are among the most
                  vulnerable and marginalized sectors of society. The Philippine
                  government has implemented various programs and policies aimed
                  at supporting the rural economy and improving the welfare of
                  farmers, but many of these initiatives have fallen short in
                  addressing the root causes of poverty and inequality in the
                  countryside.
                </p>

                <p className="plight-card-modal-p">
                  Such difficulties compel peasants to take out loans with high
                  interest rates.{" "}
                </p>
              </div>
            </div>
          </div>
          <div
            className="plight-slides-item plight-slide-7"
            id="plight-slide-7"
            aria-label="slide 7 of 10"
            tabIndex="0"
          >
            <div className="plight-card-image">
              <img
                className="plight-card-image-img"
                src="https://media.giphy.com/media/allqaf8rK2bG7hPci1/giphy.gif"
              />
            </div>
            <div className="plight-card-modal-container">
              <div className="plight-card-modal-p-container">
                <h2 className="plight-card-modal-h3">Forced Labor</h2>
                {/* <p className="plight-card-modal-p">
                  Members of farmer’s families serve the landlords’ household
                  for free.{" "}
                </p> */}
                <p className="plight-card-modal-p">
                  Many farmers and peasants in the Philippines rely heavily on
                  their families to help them with their work. However, in some
                  cases, these families are forced to work without pay or
                  adequate compensation. This is especially true for children,
                  who are often pulled out of school to work on farms.
                </p>
                <p className="plight-card-modal-p">
                  One of the main reasons for forced family labor is poverty.
                  Many families in rural areas are living in extreme poverty and
                  are often forced to rely on their children to help them make
                  ends meet. In some cases, these families are also indebted to
                  landowners or moneylenders, which further exacerbates the
                  problem.
                </p>
              </div>
            </div>
          </div>
          <div
            className="plight-slides-item plight-slide-8"
            id="plight-slide-8"
            aria-label="slide 8 of 10"
            tabIndex="0"
          >
            <div className="plight-card-image">
              <img
                className="plight-card-image-img"
                src="https://media.giphy.com/media/JPH7nyTLXN21Hl9QXj/giphy.gif"
              />
            </div>
            <div className="plight-card-modal-container">
              <div className="plight-card-modal-p-container">
                <h2 className="plight-card-modal-h3">Militarization</h2>
                {/* <p className="plight-card-modal-p">
                  Peasants are a popular target of state forces. Therefore, they
                  are also the most red-tagged, criminalized, and harassed.{" "}
                </p> */}
                <p className="plight-card-modal-p">
                  The militarization of the Philippines peasantry is a
                  long-standing issue in the country. For decades, the
                  Philippine government has deployed military forces to rural
                  areas to suppress armed rebellions and insurgencies. This has
                  led to numerous human rights violations, including
                  extrajudicial killings, forced disappearances, and
                  displacement of communities.
                </p>
                <p className="plight-card-modal-p">
                  The government's counter-insurgency programs, such as Oplan
                  Bantay Laya, have often targeted farmers and other rural
                  residents who are suspected of supporting or being members of
                  insurgent groups. The military has also been accused of
                  collaborating with private corporations, such as mining and
                  logging companies, to forcibly remove farmers from their land
                  to make way for large-scale development projects.
                </p>
                <p className="plight-card-modal-p">
                  The militarization of the countryside has not only resulted in
                  human rights abuses but has also disrupted the lives and
                  livelihoods of rural communities. Farmers have been forced to
                  abandon their crops and their homes, and many have been forced
                  to flee to urban areas to seek refuge.
                </p>
                <p className="plight-card-modal-p">
                  The Philippine government has been criticized by human rights
                  groups and international organizations for its failure to hold
                  accountable those responsible for the abuses committed by the
                  military. The government has also been urged to address the
                  root causes of the insurgency, including poverty,
                  landlessness, and social inequality.
                </p>
                <p className="plight-card-modal-p">
                  Efforts to address the militarization of the peasantry have
                  included calls for the demilitarization of rural areas and the
                  withdrawal of military forces from communities. There have
                  also been efforts to promote agrarian reform and to protect
                  the rights of farmers to their land and livelihoods. However,
                  progress has been slow, and the militarization of the
                  countryside remains a significant challenge in the
                  Philippines.
                </p>
              </div>
            </div>
          </div>
          <div
            className="plight-slides-item plight-slide-9"
            id="plight-slide-9"
            aria-label="slide 9 of 10"
            tabIndex="0"
          >
            <div className="plight-card-image">
              <img
                className="plight-card-image-img"
                src="https://media.giphy.com/media/fhEYRG1rkFIC3AMfgI/giphy.gif"
              />
            </div>
            <div className="plight-card-modal-container">
              <div className="plight-card-modal-p-container">
                <h2 className="plight-card-modal-h3">
                  Killings and Human Rights Abuses
                </h2>
                <p className="plight-card-modal-p">
                  Extrajudicial killings (EJKs) and human rights abuses are
                  serious violations of human rights and must be condemned. The
                  fact that the majority of EJK victims are peasants is a cause
                  for concern, as it points to a larger issue of inequality and
                  injustice in society.
                </p>
                <p className="plight-card-modal-p">
                  Peasants, who are often poor and marginalized, are
                  particularly vulnerable to EJKs and other human rights abuses.
                  They may be targeted by state actors or non-state actors, such
                  as criminal gangs or private security forces, for various
                  reasons, including their involvement in land disputes or their
                  opposition to development projects that may displace them from
                  their homes and livelihoods.
                </p>
                <p className="plight-card-modal-p">
                  It is important for governments to take measures to protect
                  the human rights of all their citizens, including peasants and
                  other marginalized groups. This includes ensuring that those
                  responsible for EJKs and other abuses are held accountable and
                  brought to justice, and that victims and their families are
                  provided with appropriate remedies and support.
                </p>
                <p className="plight-card-modal-p">
                  Moreover, addressing the root causes of inequality and
                  injustice is essential to prevent future violations of human
                  rights. This may involve implementing policies and programs
                  that promote social and economic inclusion and empower
                  marginalized groups, such as peasants, to participate in
                  decision-making processes that affect their lives and
                  livelihoods.
                </p>
              </div>
            </div>
          </div>
          <div
            className="plight-slides-item plight-slide-10"
            id="plight-slide-10"
            aria-label="slide 10 of 10"
            tabIndex="0"
          >
            <div className="plight-card-image">
              <img
                className="plight-card-image-img"
                src="https://media.giphy.com/media/lmKisCsdqmyZHhviNK/giphy.gif"
              />
            </div>
            <div className="plight-card-modal-container">
              <div className="plight-card-modal-p-container">
                <h2 className="plight-card-modal-h3">Bogus Land Reforms</h2>
                {/* <p className="plight-card-modal-p">
                  The land reforms that preceded were only farce, violent,
                  loan-based, and empowered big foreign and local landlords and
                  businesses.{" "}
                </p> */}
                <p className="plight-card-modal-p">
                  Land reform in the Philippines has been a contentious issue
                  for many decades. While some land reform programs have
                  achieved some success, others have been criticized for being
                  ineffective, inadequate, or even fraudulent. Here are some
                  examples of bogus land reforms in the Philippines:
                </p>
                <ul>
                  <li className="plight-card-modal-p">
                    Stock distribution option (SDO) - The Comprehensive Agrarian
                    Reform Program (CARP) of 1988 allowed landowners to retain
                    ownership of their land by distributing stocks in their
                    corporations to farmers. However, this program was widely
                    criticized for being a bogus land reform scheme because it
                    did not transfer actual ownership of land to farmers. The
                    farmers received shares of stocks that were often
                    manipulated, undervalued, or easily diluted by the
                    landowners.
                  </li>
                  <li className="plight-card-modal-p">
                    Leaseback arrangement - Some landowners in the Philippines
                    have used a leaseback arrangement to circumvent the land
                    reform program. This scheme involves leasing the land to the
                    government for distribution to landless farmers, then
                    leasing it back from the government at an exorbitant price.
                    The landowners retain control of the land while the farmers
                    are left with the burden of paying high rent.
                  </li>
                  <li className="plight-card-modal-p">
                    Land use conversion - Landowners can evade the land reform
                    program by converting agricultural land into other uses,
                    such as commercial or residential purposes. This practice is
                    often facilitated by corrupt local officials who issue
                    permits and approvals for the conversion of land, even if it
                    is not legally allowed.
                  </li>
                  <li className="plight-card-modal-p">
                    Violence and intimidation - Some landowners in the
                    Philippines have resorted to violence and intimidation to
                    prevent the implementation of land reform programs. Farmers
                    who assert their rights to land ownership are often met with
                    threats, harassment, and even physical violence.
                  </li>
                </ul>
                <p className="plight-card-modal-p">
                  These bogus land reform schemes have undermined the objective
                  of redistributing land to farmers and alleviating rural
                  poverty in the Philippines. Without genuine land reform, the
                  rural poor will continue to suffer from landlessness, poverty,
                  and inequality.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="plight-carousel__nav">
          <a
            className="plight-slider-nav"
            href="#plight-slide-1"
            aria-label="Go to slide 1"
          >
            1
          </a>
          <a
            className="plight-slider-nav"
            href="#plight-slide-2"
            aria-label="Go to slide 2"
          >
            2
          </a>
          <a
            className="plight-slider-nav"
            href="#plight-slide-3"
            aria-label="Go to slide 3"
          >
            3
          </a>
          <a
            className="plight-slider-nav"
            href="#plight-slide-4"
            aria-label="Go to slide 4"
          >
            4
          </a>
          <a
            className="plight-slider-nav"
            href="#plight-slide-5"
            aria-label="Go to slide 5"
          >
            5
          </a>
          <a
            className="plight-slider-nav"
            href="#plight-slide-6"
            aria-label="Go to slide 6"
          >
            6
          </a>
          <a
            className="plight-slider-nav"
            href="#plight-slide-7"
            aria-label="Go to slide 7"
          >
            7
          </a>
          <a
            className="plight-slider-nav"
            href="#plight-slide-8"
            aria-label="Go to slide 8"
          >
            8
          </a>
          <a
            className="plight-slider-nav"
            href="#plight-slide-9"
            aria-label="Go to slide 9"
          >
            9
          </a>
          <a
            className="plight-slider-nav"
            href="#plight-slide-10"
            aria-label="Go to slide 10"
          >
            10
          </a>
        </div>
        <div
          className="plight-carousel__skip-message"
          id="plight-skip-link"
          tabIndex="0"
        ></div>
      </div>
    </div>
  );
};

export default Plight;
