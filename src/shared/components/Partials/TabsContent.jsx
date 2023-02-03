import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const tabstyle = {
  color:'#b9b9b9',
    '&.Mui-selected': {
      color: '#FDDE00'},
      indicator: {
        backgroundColor: 'white'},
        minWidth:'5%'
      

};

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
        <Box sx={{ p: 3 }}>
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

<div className="ntbk-container" >
  <div className='ntbk-topic'>Chapter Guide</div>
    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className="ntbk-tabs"
        TabIndicatorProps={{hidden: 'true'}} >
      <Tab label="Ch. 1" sx={tabstyle} className="ntbk-tab" {...a11yProps(0)} />
      <Tab label="Ch. 2" sx={tabstyle} className="ntbk-tab" {...a11yProps(1)} />
      <Tab label="Ch. 3" sx={tabstyle} className="ntbk-tab" {...a11yProps(2)} />
      <Tab label="Ch. 4" sx={tabstyle} className="ntbk-tab" {...a11yProps(3)} />
      <Tab label="Ch. 5" sx={tabstyle} className="ntbk-tab" {...a11yProps(4)} />
    </Tabs>

    <TabPanel value={value} index={0} className="ntbk-tabpanel">
    <div className='ntbk-title'>The Peasantry</div>
      <p>Peasants are rural-dwelling, small-scale farmers, 
        whose subsistence and income are directly or indirectly 
        derived from land, who hold little to no land. Peasants 
        also apply to indigenous people and settlers working on 
        the land. In the Philippines and in many parts of the world, 
        the term peasant is interchangeable with farmer. Peasants 
        are the main force of the national economy.</p>
    </TabPanel>
    <TabPanel value={value} index={1}>
    <div className='ntbk-title'>History</div>
      <p>Lorem ipsum dolor sit amet, consectetur debititis
        sapiente earum expedita sint facili
        Lorem ipsum dolor sit amet, consectetur debititis
        sapiente earum expedita sint facili
        Lorem ipsum dolor sit amet, consectetur debititis
        sapiente earum expedita sint facili</p>
    </TabPanel>
    <TabPanel value={value} index={2}>
    <div className='ntbk-title'>Plight</div>
      <p>Lorem ipsum dolor sit amet, consectetur debititis
        sapiente earum expedita sint facili
        Lorem ipsum dolor sit amet, consectetur debititis
        sapiente earum expedita sint facili
        Lorem ipsum dolor sit amet, consectetur debititis
        sapiente earum expedita sint facili</p>
    </TabPanel>
    <TabPanel value={value} index={3}>
    <div className='ntbk-title'>Roots</div>
      <p>Lorem ipsum dolor sit amet, consectetur debititis
        sapiente earum expedita sint facili
        Lorem ipsum dolor sit amet, consectetur debititis
        sapiente earum expedita sint facili
        Lorem ipsum dolor sit amet, consectetur debititis
        sapiente earum expedita sint facili</p>
    </TabPanel>
    <TabPanel value={value} index={4}>
    <div className='ntbk-title'>Solutions</div>
      <p>Lorem ipsum dolor sit amet, consectetur debititis
        sapiente earum expedita sint facili
        Lorem ipsum dolor sit amet, consectetur debititis
        sapiente earum expedita sint facili
        Lorem ipsum dolor sit amet, consectetur debititis
        sapiente earum expedita sint facili</p>
    </TabPanel>

</div>

  );
}

