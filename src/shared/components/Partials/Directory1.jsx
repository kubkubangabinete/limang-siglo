import * as React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import { orange } from "@mui/material/colors";
import { makeStyles } from "@material-ui/core/styles";
import sample from "../../../assets/samplefarm.png";

const useStyles = makeStyles({
  button: {
    width: "7vh",
    height: "7vh",
    "&:hover": {
      backgroundColor: "#FDDE00",
      boxShadow: "0 0 10px rgba(249, 255, 65, 0.844)",
    },
  },
});

const styles = {
  card: {
    position: "relative",
    borderRadius: "3vh",
    height: "55vh",
    width: "40vh",
    boxShadow: "5px 5px 10px rgba(68, 1, 24,0.2)",
    backgroundImage: "linear-gradient(#ebdbb1, #e8d296)",
  },
  overlay: {
    position: "absolute",
    bottom: "0",
    marginLeft: "0",
    color: "#ffd52f",
    width: "100%",
    paddingLeft: "2vh",
    paddingBottom: "0vh",
    borderRadius: "0 0 8px 8px",
  },
  overlayp: {
    color: "rgba(255, 255, 255, 0.5)",
    paddingLeft: "0.rem",
    fontSize: "2.5vh",
    position: "relative",
  },
  overlayh1: {
    fontSize: "4vh",
    paddingTop: "3vh",
    marginBottom: "0vh",
    position: "relative",
  },
  media: {
    height: "55vh",
    width: "40vh",
  },
  flip: {
    position: "relative",
    width: "",
  },
};

export default function Directory1() {
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
          style={styles.media}
          className="pokpok"
        />
        <div style={styles.overlay} className="pokpok-overlay">
          <h1 style={styles.overlayh1}>Chapter 1</h1>
          <p style={styles.overlayp}>
            The Peasantry
            <Link
              className="ch-link ch-active"
              to="/chapters-directory/chapter-1"
            >
              <div className="flip-container" style={styles.flipp}>
                <IconButton aria-label="flip" onClick={handleOpen}>
                  <Avatar
                    sx={{ bgcolor: orange[700] }}
                    className={classes.button}
                  >
                    <KeyboardDoubleArrowRightRoundedIcon
                      className="flip-icon"
                      sx={{ width: "5vh", height: "5vh" }}
                    />
                  </Avatar>
                </IconButton>
              </div>
            </Link>
          </p>
        </div>
      </div>
    </Card>
  );
}
