import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import sample from '/src/assets/chii-sample1.png';
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
    '&:hover': {
      backgroundColor: '#FDDE00',
      boxShadow: '0 0 10px rgba(249, 255, 65, 0.844)',
    },
  }
});

const styles = {
  card: {
    position: 'relative',
    borderRadius: '20px',
    height: '411px',
    width: '298.5px',
    boxShadow: '5px 5px 10px rgba(68, 1, 24,0.2)',
    backgroundImage: "linear-gradient(#ebdbb1, #e8d296)",

  },
  overlay: {
    position: 'absolute',
    bottom: '0',
    marginLeft: '0',
    color: '#ffd52f',
    width: '100%',
    paddingLeft: '1rem',
    paddingBottom: '1rem',
    borderRadius: '0 0 8px 8px',

  },

  overlayp: {
    color: 'rgba(255, 255, 255, 0.5)',
    paddingLeft: '0.2rem'
  }
}

export default function Directory2() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card style={styles.card} className="ch-card">
      <div className="flip-container">
        <IconButton aria-label="flip" onClick={handleOpen}>
          <Avatar sx={{ bgcolor: orange[700] }} className={classes.button}>
            <KeyboardDoubleArrowRightRoundedIcon className="flip-icon" /></Avatar>
        </IconButton>
      </div>
      <div className="pokpok-container">
        <CardMedia
          component="img"
          alt="chapter something"
          height="411"
          image={sample}
          style={styles.media} className="pokpok" />
        <div style={styles.overlay} className="pokpok-overlay">
          <h1 style={styles.overlayh1}>Chapter 2</h1>
          <p style={styles.overlayp}>History of the Struggle</p>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        keepMounted
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>

    </Card>
  )
}