import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

// For the tabs
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// For the accordion
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { borderColor, display } from '@mui/system';

const accordionStyle = {
  boxShadow: 'none',
  background: 'none',
  borderBottom: 1,
  borderColor: '#d4d2d2',
};

const accordionSummaryStyle = {
  ariaControls: "panel1a-content",
  id: "panel1a-header",
  alignText: 'left',
  padding: 0,
  minWidth: 0,
  minHeight: 0,
};

const accordionDetailsStyle ={
  alignText: 'left',
  paddingLeft: 0,
  paddingTop: 0,
};

const tabsstyle = {
  margin: 0,
  marginLeft: '2.5vh',
  border: 'none',
  minWidth: 0,
  minHeight: 0,
};

const tabstyle = {
  color:'#b9b9b9',
  padding: '1vw',
  paddingLeft: '2vw',
  paddingRight: '2vw',
  fontSize: '1.8vh',
    '&.Mui-selected': {
      color: '#FDDE00'},
  indicator: {
    backgroundColor: 'white'},
  minWidth: '1vh',
  minHeight: '5vh',
};

const typographyStyle = {
  alignText: 'left',
  paddingLeft: 0,
};


// General - Tab Contents
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: '6vh' }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  //For the tabs
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

<div className="ntbk-container">
  <div className='ntbk-header'>
  <div className='ntbk-topic'>Chapter Guide</div>
    <Tabs value={value} sx={tabsstyle} onChange={handleChange} aria-label="basic tabs example" className="ntbk-tabs"
        TabIndicatorProps={{hidden: 'true'}}>
      <Tab label="Ch. 1" sx={tabstyle}  {...a11yProps(0)} containerElement={<Link to="/notebook/chapter-one"/>} />
      <Tab label="Ch. 2" sx={tabstyle}  {...a11yProps(1)} containerElement={<Link to="/notebook/chapter-two"/>} />
      <Tab label="Ch. 3" sx={tabstyle} {...a11yProps(2)} containerElement={<Link to="/notebook/chapter-three"/>} />
      <Tab label="Ch. 4" sx={tabstyle} {...a11yProps(3)} containerElement={<Link to="/notebook/chapter-four"/>} />
      <Tab label="Ch. 5" sx={tabstyle} {...a11yProps(4)} containerElement={<Link to="/notebook/chapter-five"/>} />
    </Tabs>
    </div>

    <TabPanel value={value} index={0} className="ntbk-tabpanel">
    <div className='ntbk-title'><h3>The Peasantry</h3></div>
      <p>
        Peasants are small farmers from rural areas who have little to no land and who are oppressed-exploited by landlords. <br></br><br></br>
        These farmers are considered peasants because they are tied to a feudal or landlord- and-peasant relationship. To illustrate, landlords—together with big corporations–continue to rob the peasants with high land rents, low wages, and high interest rates. As a result, the peasants continue to get poorer, while the landlords continue to get richer. Granted that they are not under any of these harsh socioeconomic conditions, they are not peasants, but just farmers. <br></br><br></br>
        It is important for us to know that peasants are the main force of the national economy. Many of them are engaged in various activities, not only exclusive to farming. These can be fishing, handicraft work, pastoralism and livestock raising, forestry, hunting and gathering, carpentry, among many others. <br></br><br></br>
        Moreover, not all peasants are the same. They can be categorized into three strata: namely, rich, middle, and poor peasants. Of course, even though they can be considered as “rich,” they are still peasants after all and the majority of them are oppressed and exploited by landlords until now. <br></br><br></br>
        Do you know, being peasants can also extend to indigenous people and settlers who work on the land?
      </p>    
    </TabPanel>
    <TabPanel value={value} index={1} className="ntbk-tabpanel">
    <div className='ntbk-title'><h3>History</h3></div>
      <div>
        
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subtitle'>Pre-colonial Period</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
              <p>
                Before we were colonized by the Spaniards, although the social systems were not perfect, not free from peasant oppression and slavery — land, at least in many parts of Luzon, was shared by everyone and was tilled for the whole community. <br></br><br></br>
                One well-known development is that there was already a prosperous irrigation system for their fields at that time. The famous rice terraces are worth mentioning, a product of the engineering genius of the early Ifugaos. <br></br><br></br>
                More so, pre-colonial Philippines had a great deal of achievements: livestock-raising, fishing, brewing, mining, lumbering, weapons and cannons, gunpowder, weaving, shipbuilding, and ornaments.<br></br><br></br>
              </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
      sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography><p className='ntbk-subtitle'>Spanish Colonial Period</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
            <p>
              The land problem and peasant oppression intensified when the Spanish Empire in the 1500s colonized the Philippines. These were made possible through the following below. <br></br><br></br>
                <p className='ntbk-subsubtitle'>The Regalian Doctrine</p>
                Through the regalian doctrine the conquistadors introduced, all our lands were to be completely owned by the “crown” or the King of Spain.<br></br><br></br>
                <p className='ntbk-subsubtitle'>Encomienda System</p>
                This was a system where the Spanish colonial officials and religious orders were granted wide areas of lands as an award for their services in the conquest of the Filipinos. They were granted the right to force Filipino peasants to farm the stolen lands to produce the needs of the crown and its other colonies.<br></br><br></br>
                <p className='ntbk-subsubtitle'>Hacienda System</p>
                After some time, the encomienda system evolved into the hacienda system. Compared to the former, this system was geared to produce superprofits by expanding the possessed lands into plantations or “haciendas.” Here, crops and raw materials are produced for export, consumption, and demand of Spanish and other European countries.<br></br><br></br>
                <p className='ntbk-subsubtitle'>Compulsory Taxation</p>
                Throughout, taxes were compulsory and had to be collected (50% of crops produced). Peasants were forced to clear forested areas for farming and infrastructures for the new government.<br></br><br></br>
            </p></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
      sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography><p className='ntbk-subtitle'>American Colonial Period</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
            <p>After replacing the former rulers, the United States continued the hacienda system and the status of the Philippines as a colony, and developed it to its full potential. U.S. imperialism committed genocide and large-scale grave human rights abuses against Filipinos.</p><br></br>
            <ol>
              <li>
                They encouraged the development of the hacienda system, resulting in extracting more export crops and natural resources — all sold at low prices through cheap labor and the expansion of their base in the country.
              </li>
              <li>
                They implemented deceptive land laws that only reinforced the land monopoly, land-grabbings, and landlessness.
              </li>
              <li>
                To spread their influence, imports of American commodities were advertised and sold in the motherland. They  also sought the Philippines as a market for their surplus goods, which crushed local handicrafts and manufacturers, resorting the Filipinos to buy these overpriced finished goods instead of manufacturing them – leaving them to become dependent on importing expensive goods and exporting cheap ones.
              </li>
              <li>During the 1950s, foreign machinery and agricultural inputs were sold at excessive prices. This played a major role in the widespread poverty, hunger, and inequality across the Philippines and other colonies. They accumulated so much debt that they have still been taking out loans from international financing institutions such as the International Monetary Fund and World Bank. In exchange for the loans, they have been mandated to buy overpriced genetically modified seeds and agro-chemicals that kill local indigenous crop varieties and sustainable agricultural practices.</li>
            </ol>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
      sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography><p className='ntbk-subtitle'>Present Republic</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
            <p>The regimes that followed the declaration of the Philippines’ fake independence from the US were not entirely different from their colonial masters. They heeded the demands of the peasant communities through counterinsurgency campaigns and anti-peasant programs.</p>
          <div>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subsubtitle'>1. Pres. Manuel Roxas</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
            <ul>
              <li>Maintained US ownership and utilization of the country’s lands, natural resources, and public utilities through agreements with the United States 	&#40;e.g., U.S.-R.P. Treaty of General Relations, Property Act, and Bell Trade Act&#41;.</li>
              <li>Attacked peasant communities who were begging for land reform through military forces 	&#40;e.g., Maliwalu massacre and Masico massacre&#41;.</li>
              <li>Charged peasants for all the unpaid land rent during the recent Philippine-Japanese war.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subsubtitle'>2. Pres. Ramon Magsaysay</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
            <ul>
              <li>The agrarian program that aimed for land distribution was barely enforced &#40;i.e., 1955 Agrarian Reform Law&#41;.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subsubtitle'>3. Pres. Diosdado Macapagal</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
            <ul>
              <li>The agrarian program that aimed for limiting land ownership of landlords was barely enforced.</li>
              <li>Raised land rent, caused the decline of prices of farmers’ agricultural goods, and expanded plantations for export crops. (Points 1 and 2 through the 1963 Agrarian Reform Code.)</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subsubtitle'>4. Pres. Ferdinand Marcos</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
            <ul>
              <li>Subjected rice and corn farms to land distribution yet exempted haciendas and plantations devoted to export crops like sugar, copra, bananas, tobacco, pineapples, etc. More than half of farmers were deprived to own lands. (Through the Presidential Decree 2 and 27.) </li>
              <li>Expanded the lands of foreign corporate farms and plantations. Farms owned by peasants were then stolen by these big businesses, instead of acquiring idle, abandoned, or unexploited lands. In turn, this raised rural poverty and landlessness. (Through the Green Revolution/Masagana 99.)</li>
              <li>Required farmers to use expensive imported seeds, chemical soil fertilizers, and pesticides. This, as well as the adding ever-increasing prices of farm inputs, buried the farmers in debt and pushed them into poverty. (Through the Green Revolution/Masagana 99.)</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subsubtitle'>5. Pres. Corazon Aquino</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
            <ul>
              <li>Peasants are obliged to pay for land rent at a high cost.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subsubtitle'>6. Pres. Fidel Ramos</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
              <ul>
                <li>Privatized and commercialized peasant-owned lands, expanding business interests and worsening peasant landlessness. (Through the Philippines 2000 program.)</li>
                <li>Further encouraged export-oriented production of cheap goods and importation of expensive ones. (Through joining the World Trade Organization.) </li>
                <li>Declared a war on the peasant Moros in the countryside.</li>
              </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subsubtitle'>7. Pres. Joseph Estrada</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
            <ul>
              <li>Did not have any programs for peasants at all.</li>
              <li>Declared an “All Out War” on Moros in the countryside.</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subsubtitle'>8. Pres. Gloria Arroyo</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
            <ul>
              <li>The national income for agriculture further declined because of excessive importation. Because of this, millions of farmers lost their livelihoods, were forced to sell or mortgage their very little lands, and were forced to look for other jobs in cities because. Worse, the products that were being imported were products that could be produced in the Philippines – rice, vegetables, sugar, and fish.</li>
              <li>Militarization and bombings in the countryside (i.e., Bangsa Moro, Liguasan Marsh, Capiz).</li>
              <li>EJKs of members, leaders, sympathizers of the peasantry; even priests, journalists, lawyers, doctors, students, etc. (Through Oplan Bantay Laya.)</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subsubtitle'>9. Pres. Benigno Aquino III</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
            <ul>
              <li>The new agrarian reform that was passed only worsened rural poverty and landlessness (i.e., CARPER).</li>
              <li>Worsened imperialist exploitation of the country’s natural resources (Through PPP).</li>
              <li>Reinforced counter-insurgency campaigns that mainly affected those in the countryside. (Through Oplan Bayanihan.)</li>
              <li>Thousands of farmers who were asking for agricultural support were shot by state forces (Kidapawan massacre).</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subsubtitle'>10. Pres. Rodrigo Duterte</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
            <ul>
              <li>Overprioritzation of infrastructure projects that lead to trillions of debts and failure of distribution of government funds. (Through Build! Build! Build!)</li>
              <li>Increased taxes of basic commodities, burdening the masses even more, especially the poorest. These are also used to pay off the country’s high amounts of debts. (Through Train Law of 2018.)</li>
              <li>Worsened peasant-farmer livelihoods by prioritizing rice importation through removing rice import quotas. (Through Rice Liberalization Law.)</li>
              <li>Created a national task force that only put peasant lives in danger, as they are popular targets of violence and black propaganda among state forces. (Through Executive Order No. 70 (NTF-ELCAC) and “whole-of-nation” approach)</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>


      </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </TabPanel>

    <TabPanel value={value} index={2} className="ntbk-tabpanel">
    <div className='ntbk-title'><h3>Plight</h3></div>
    <div>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subtitle'>1. Landlessness</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
              <p>
              At least 7 out of 10 farmers are landless and do not own the land they till. For a farmer, losing their land is like losing their basic right to existence.
              </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subtitle'>2. Land-grabbing, land use conversion, and corporate plantation</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
              <p>Today, peasants are still forced to give up their lands because of the conversion of agricultural lands to commercial use. Many are evicted from their lands through military means and anti-peasant laws and policies.</p>
              <p>In many cases, there are peasants who are the owners of their lands as declared on paper, yet the agribusinesses are always the ones who control and benefit from them. Peasants cannot also grow their own crops on abandoned commercial lands they used to work on, do not have the autonomy to choose which types of crops and agricultural inputs to use, and are forced to buy and use expensive environment- and health-damaging foreign imports of agricultural inputs.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subtitle'>3. Food insecurity</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
              <p>The ever-expansion of land monopoly among big landlords and agribusinesses are a threat to the food security of Filipinos, especially the peasants. Export crops have taken over and far exceeded the rice and corn farms, which the peasants mainly depend on for food and sustenance. </p>
              <p>The influx of imported expensive agricultural products, too, have taken a toll on their livelihoods and food as they end up earning next to nothing.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subtitle'>4. Low wages</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
              <p>
              Peasant workers are paid below their required basic income and are forced to sell their agricultural products at a very low price. The national minimum wage is also not adequate enough for them to achieve financial security.
              </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subtitle'>5. High land rent</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
              <p>
              Peasants are obliged to pay for land rent at a high cost.
              </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subtitle'>6. High loan and tax interest rates</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
              <p>
              Extreme poverty compels peasants to take out loans with high interest rates. 
              </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subtitle'>7. Forced labor</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
              <p>
              Members of farmer’s families serve the landlords’ household for free.
              </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subtitle'>8. Militarization and criminalization</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
              <p>
              Peasants are a popular target of state forces. Therefore, they are also the most red-tagged, criminalized, and harassed. 
              </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subtitle'>9. EJKs and other human rights abuses</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
              <p>
              Majority of EJK victims are peasants.
              </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subtitle'>10. Bogus land reforms</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
              <p>
              The land reforms that preceded were only farce, violent, loan-based, and empowered big foreign and local landlords and businesses. 
              </p>
          </Typography>
        </AccordionDetails>
      </Accordion>


      </div>

    </TabPanel>
    <TabPanel value={value} index={3} className="ntbk-tabpanel">
    <div className='ntbk-title'><h3>Roots</h3></div>
    <div>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subtitle'>Imperialism</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
              <p>
                Imperialism is the monopoly of a weaker nation’s economy, politics, and culture, where they are controlled and concentrated in the hands of a few big capitalists. They hold the markets, source of raw materials, modern technology, and skilled labor. They have influence on the dictation of laws and policies, and also on the size of production, price, and lending.
              </p>
              <p>
                Rich and powerful nations have been interested in third world countries like the Philippines as a source of cheap raw materials, cheap labor, and a market for their surplus goods and capital. Imperialism prevents peasants from attaining food security, food sovereignty, and from their rights to safe, healthy and ecologically sustainable production.
              </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subtitle'>Feudalism</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
            <p>Feudalism is the oppression against peasants by landlords. Here, agricultural lands are monopolized by a few landlords and vast tracts of land are tilled by the peasantry who face landlessness and food insecurity. Exploitation is intensified through high land rent and high interest and loan rates, slavery, cheap labor and products, and backward method of farming.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subtitle'>Bureaucrat Capitalism</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
            <p>Bureaucrat capitalism is operating on the government as a business and for the enrichment of those sitting in power. Most top bureaucrats are in national, provincial, and municipal governments.The bureaucrat capitalists direct the operation of the reactionary state. They wield political power to serve imperialists, landlords, and the large comprador bourgeoisie. At the same time, they are harnessing their position to loot from the people’s money and expand land ownership and their own businesses.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </TabPanel>


    <TabPanel value={value} index={4} className="ntbk-tabpanel">
    <div className='ntbk-title'><h3>Solutions</h3></div>
      <p className='ntbk-subtitle'>Genuine Agrarian Reform Bill</p>
      <p>The Genuine Agrarian Reform Bill &#40;GARB&#41; aims to break up the monopoly of a few landowners and foreign control of agricultural lands, eliminate all forms of oppression and exploitation in the countryside, and pave the way for social justice. Its objectives are situated below. </p>
      <div>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subsubtitle'>1. Free distribution of land</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
              <p>
              Land will be given in five years at no cost, land-related debts will be cleared, and a land title will be issued
              </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subsubtitle'>2. No exemptions</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
            <p>All private and public agricultural lands will be distributed.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subsubtitle'>3. Land protection</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
            <ul>
              <li>The lands are prohibited against sale, mortgage, transfer, or any conveyance, except for hereditary succession.</li>
              <li>Progress of land distribution will be kept track through operation centers in Land Reform Zones</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subsubtitle'>4. Additional support</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
              <ul>
                <li>50B pesos allocated budget to improve the productivity and working conditions of the peasantry.</li>
                <li>Credit facilities, production support, post-harvest, market access and market, price guarantees and other necessary services for a viable production and raising of income.</li>
              </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subsubtitle'>5. Agricultural worker support</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
            <ul>
              <li>Necessary support, incentives, and privileges</li>
              <li>Regularization of security of tenure</li>
              <li>Higher income and benefits</li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subsubtitle'>6. Farmer participation</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
              <p>They will participate and help in the land distribution process, land and landlord problems, building cooperatives, and delivering support services.</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
       sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyle}
        >
          <Typography
          sx={typographyStyle}><p className='ntbk-subsubtitle'>7. National industrialization</p></Typography>
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyle}>
          <Typography>
          <ul>
            <li>Break free from foreign exploitation</li>
            <li>Natural resources will be used to develop national industries</li>
            <li>Prioritize Filipino products and industries</li>
            <li>Protect Filipino producers from unfair regulations, local corruption, and foreign business advantage</li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </TabPanel>

</div>

  );
}

