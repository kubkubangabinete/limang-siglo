import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import sample from '../../../assets/chii-sample1.png';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import Avatar from '@mui/material/Avatar';
import { orange } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';


{/*<Link to="/take-action" style={{textDecoration: 'none'}}>
        <button className="take-action-btn">Take Action</button>
</Link>*/}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const useStyles = makeStyles({
  button: {
    width: '7vh',
    height: '7vh',

    '&:hover': {
      backgroundColor: '#FDDE00',
      boxShadow: '0 0 10px rgba(249, 255, 65, 0.844)',
    },
  }
});

const styles = {
  card: {
    position: 'relative',
    borderRadius: '3vh',
    height: '55vh',
    width: '40vh',
    boxShadow: '5px 5px 10px rgba(68, 1, 24,0.2)',
    backgroundImage: "linear-gradient(#ebdbb1, #e8d296)",

  },
  overlay: {
    position: 'absolute',
    bottom: '0',
    marginLeft: '0',
    color: '#ffd52f',
    width: '100%',
    
    paddingLeft: '2vh',
    paddingBottom: '0vh',
    borderRadius: '0 0 8px 8px',

  },

  overlayp: {
    color: 'rgba(255, 255, 255, 0.5)',
    paddingLeft: '0.rem',
    fontSize: '2.5vh',
    position: 'relative'
  },

  overlayh1: {
    fontSize: '4vh',
    paddingTop: '3vh',
    marginBottom: '0vh',
    position: 'relative'
  },
  

  media: {
    height: '55vh',
    width: '40vh',
  },

  flip: {
    position: 'relative',
    width: ""
  }
}

export default function Directory2() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card style={styles.card} className="ch-card">
      <div className="pokpok-container">
        <CardMedia
          component="img"
          alt="chapter something"
          height="411"
          image={sample}
          style={styles.media} className="pokpok" />
        <div style={styles.overlay} className="pokpok-overlay">
          <h1 style={styles.overlayh1}>Chapter 2</h1>
          <p style={styles.overlayp}>History of Struggle
          <Link className="ch-link ch-active" to="/chapters-directory/chapter-2">
        <div className="flip-container">
          <IconButton aria-label="flip" onClick={handleOpen}>
            <Avatar sx={{ bgcolor: orange[700] }} className={classes.button}>
              <KeyboardDoubleArrowRightRoundedIcon className="flip-icon" /></Avatar>
          </IconButton>
        </div>
      </Link></p>
        </div>

      </div>




    </Card>
  )
}