import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import sample from '/src/assets/chi-sample1.png';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import Avatar from '@mui/material/Avatar';
import { orange } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'


/* Ang kailangan ay mayroon tayong button for every chapter
(i.e., ChapterIPage, ChapterIIPage, ChapterIIIPage, etc.). 

Pero, paano natin ito gagawin?

Sa ngayon, pwede tayong gumawa ng "Params" (thanks, BossRod), kung saan
may id ang bawat link, diba? 

Para kung ikiklik ito, mapupunta kaagad sa lahat ng pages.

Ngunit may isa pa tayong problema. Paano pa rin nito iko-close yung
mismong ChaptersDirectoryPage, kapag naclick nag link na iyon? 

Isip tayo ng solusyon.

Ang naiisip ko lang na solusyon ay maghahanap talaga ng paraan
kung paano irereference (o iimport kung import ang need) ang ibang 
components from other jsx files. Kapag alam na kung paano,
gawa ng function na malalaman ang status nila. At kapag kunwari
ay ang status nito ay open, kapag onclick ng link to go to ch.1/ch.n,
masasara dapat iyan.

*/

/*<Link to="/take-action" style={{textDecoration: 'none'}}>
        <button className="take-action-btn">Take Action</button>
</Link>*/

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



export default function Directory1() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //const chapterClose = () => setOpen(false);

  //i-close yung ChaptersDirectoryPage if nacklick ang link sa modal 

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
          <h1 style={styles.overlayh1}>Chapter 1</h1>
          <p style={styles.overlayp}>The Peasantry
                  <Link className="ch-link ch-active" to="/chapters-directory/chapter-1">
                <div className="flip-container" style={styles.flipp}>
                  <IconButton aria-label="flip" onClick={handleOpen}>
                    <Avatar sx={{ bgcolor: orange[700] }} className={classes.button}>
                      <KeyboardDoubleArrowRightRoundedIcon className="flip-icon" sx={{ width: '5vh', height: '5vh' }}/></Avatar>
                  </IconButton>
                </div>
              </Link></p>
          
        </div>
       
      </div>
      

    </Card>
  )
}