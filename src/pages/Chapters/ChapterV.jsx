import React, { useState } from "react";
import Ch5Info from "../../shared/components/Partials/Ch5Info";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";


const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#efcc42",
    color: "white",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    boxShadow:"0px 0px 10px 3px #d8a408" ,
    border: "none",
  },
}));



const ChapterVPage = () => {
  const [checked, setChecked] = useState(false);
const [hidden, setHidden] = useState(false);
const [isOpen, setIsOpen] = useState(false);
  const modelRef = React.useRef();
  

  return (
    <div className="hehe">
      <div className="dev-cards-container">
        {" "}
        {/* LABEL + ONCLICK */}
        <div className="dev-cards-list">
          <div className="page-header-container">
            <h1 className="page-header-title">chapter5 
              <sup>
                <button className="about-ch" onClick={() => setIsOpen(true)}>
                  ?
                </button>
              </sup>
            </h1>
             {/* <button onClick={() => setIsOpen(true)}>
                <div class="more-btn">
                  <b>&gt;</b>
                </div>
              </button>*/}
            <p className="page-header-subtitle">solutions</p>
            <Ch5Info open={isOpen} onClose={() => setIsOpen(false)}/> 
          </div>

          {/* Solution 1: Free Land Distribution */}
          <HtmlTooltip
            
            title={
              <React.Fragment>
                <Typography color="inherit">Free land 
                distribution
                </Typography>
              </React.Fragment>
            }
          >
            <div className="dev-1 sol-btn">
              <label>
                <div className="dev-card-btn">
                  <div className="sol-card-image">
                    <model-viewer
                      className="model-viewer"
                      src="../../../public/FreeLand.glb"
                      loading="eager"
                      style={{
                        width: "13vw",
                        height: "13vw",
                        padding: "0",
                        margin: "0",
                        borderRadius: "2vh",
                        border: "1vh solid lightyellow",
                        background:
                          "linear-gradient(#f1ede6 10%,rgba(220, 208, 181)100%)",
                        top: "0",
                        hover: {
                          boxShadow: "0px 0px 100px 100px red",
                        },
                      }}
                      auto-rotate
                      camera-controls
                      ar
                      exposure="2"
                      shadow-softness="1"
                      environment-image="/public/pillars_1k.hdr"
                      ar-modes="webxr"
                      ref={(ref) => {
                        modelRef.current = ref;
                      }}
                    ></model-viewer>
                  </div>
                </div>
              </label>
             
            </div>
          </HtmlTooltip>

          <HtmlTooltip title={
              <React.Fragment>
                <Typography color="inherit">No exemptions
                </Typography>
                {/* {"It's very engaging. Right?"} */}
              </React.Fragment>
            }
          >
            <label className="dev-2 sol-btn">
              <div className="dev-card-btn">
                <div className="sol-card-image">
                  <model-viewer
                    className="model-viewer"
                    src="../../../public/SignBoard.glb"
                    loading="eager"
                    style={{
                      width: "13vw",
                      height: "13vw",
                      padding: "0",
                      margin: "0",
                      borderRadius: "2vh",
                      border: "1vh solid lightyellow",
                      background:
                        "linear-gradient(#f1ede6 10%,rgba(220, 208, 181)100%)",
                      top: "0",
                      hover: {
                        boxShadow: "0px 0px 100px 100px red",
                      },
                    }}
                    auto-rotate
                    camera-controls
                    ar
                    exposure="1"
                    shadow-softness="1"
                    environment-image="/public/pillars_1k.hdr"
                    ar-modes="webxr"
                    ref={(ref) => {
                      modelRef.current = ref;
                    }}
                  ></model-viewer>
                </div>
              </div>
            </label>
          </HtmlTooltip>


          <HtmlTooltip title={
              <React.Fragment>
                <Typography color="inherit">Land protection
                </Typography>
                {/* {"It's very engaging. Right?"} */}
              </React.Fragment>
            }>
            <label className="dev-3 sol-btn">
              <div className="dev-card-btn">
                <div className="sol-card-image">
                  <model-viewer
                    className="model-viewer"
                    src="../../../public/Shield.glb"
                    loading="eager"
                    style={{
                      width: "13vw",
                      height: "13vw",
                      padding: "0",
                      margin: "0",
                      borderRadius: "2vh",
                      border: "1vh solid lightyellow",
                      background:
                        "linear-gradient(#f1ede6 10%,rgba(220, 208, 181)100%)",
                      top: "0",
                      hover: {
                        boxShadow: "0px 0px 100px 100px red",
                      },
                    }}
                    auto-rotate
                    camera-controls
                    ar
                    exposure="1.5"
                    shadow-softness="1"
                    environment-image="/public/pillars_1k.hdr"
                    ar-modes="webxr"
                    ref={(ref) => {
                      modelRef.current = ref;
                    }}
                  ></model-viewer>
                </div>
              </div>
            </label>
          </HtmlTooltip>


          <HtmlTooltip title={
              <React.Fragment>
                <Typography color="inherit">Additional support
                </Typography>
                {/* {"It's very engaging. Right?"} */}
              </React.Fragment>
            }>
            <label className="dev-4 sol-btn">
              <div className="dev-card-btn">
                <div className="sol-card-image">
                  <model-viewer
                    className="model-viewer"
                    src="../../../public/Benefits.glb"
                    loading="eager"
                    style={{
                      width: "13vw",
                      height: "13vw",
                      padding: "0",
                      margin: "0",
                      borderRadius: "2vh",
                      border: "1vh solid lightyellow",
                      background:
                        "linear-gradient(#f1ede6 10%,rgba(220, 208, 181)100%)",
                      top: "0",
                      hover: {
                        boxShadow: "0px 0px 100px 100px red",
                      },
                    }}
                    auto-rotate
                    camera-controls
                    ar
                    exposure="0.5"
                    shadow-softness="1"
                    environment-image="/public/pillars_1k.hdr"
                    ar-modes="webxr"
                    ref={(ref) => {
                      modelRef.current = ref;
                    }}
                  ></model-viewer>
                </div>
              </div>
            </label>
          </HtmlTooltip>

          <HtmlTooltip title={
              <React.Fragment>
                <Typography color="inherit">Agriworker support
                </Typography>
                {/* {"It's very engaging. Right?"} */}
              </React.Fragment>
            }>
            <label className="dev-5 sol-btn">
              <div className="dev-card-btn">
                <div className="sol-card-image">
                  <model-viewer
                    className="model-viewer"
                    src="../../../public/PiggyBank.glb"
                    loading="eager"
                    style={{
                      width: "13vw",
                      height: "13vw",
                      padding: "0",
                      margin: "0",
                      borderRadius: "2vh",
                      border: "1vh solid lightyellow",
                      background:
                        "linear-gradient(#f1ede6 10%,rgba(220, 208, 181)100%)",
                      top: "0",
                      hover: {
                        boxShadow: "0px 0px 100px 100px red",
                      },
                    }}
                    auto-rotate
                    camera-controls
                    ar
                    exposure="1"
                    shadow-softness="1"
                    environment-image="/public/pillars_1k.hdr"
                    ar-modes="webxr"
                    ref={(ref) => {
                      modelRef.current = ref;
                    }}
                  ></model-viewer>
                </div>
              </div>
            </label>
          </HtmlTooltip>

          <HtmlTooltip title={
              <React.Fragment>
                <Typography color="inherit">Farmer participation
                </Typography>
                {/* {"It's very engaging. Right?"} */}
              </React.Fragment>
            }>
            <label className="dev-6 sol-btn">
              <div className="dev-card-btn">
                <div className="sol-card-image">
                  <model-viewer
                    className="model-viewer"
                    src="../../../public/Gear.glb"
                    loading="eager"
                    style={{
                      width: "13vw",
                      height: "13vw",
                      padding: "0",
                      margin: "0",
                      borderRadius: "2vh",
                      border: "1vh solid lightyellow",
                      background:
                        "linear-gradient(#f1ede6 10%,rgba(220, 208, 181)100%)",
                      top: "0",
                      hover: {
                        boxShadow: "0px 0px 100px 100px red",
                      },
                    }}
                    auto-rotate
                    camera-controls
                    ar
                    exposure="0.5"
                    shadow-softness="1"
                    environment-image="/public/pillars_1k.hdr"
                    ar-modes="webxr"
                    ref={(ref) => {
                      modelRef.current = ref;
                    }}
                  ></model-viewer>
                </div>
              </div>
            </label>
          </HtmlTooltip>

          <HtmlTooltip title={
              <React.Fragment>
                <Typography color="inherit">National Industrialization
                </Typography>
                {/* {"It's very engaging. Right?"} */}
              </React.Fragment>
            }>
            <label className="dev-7 sol-btn">
              <div className="dev-card-btn">
                <div className="sol-card-image">
                  <model-viewer
                    className="model-viewer"
                    src="../../../public/Factory.glb"
                    loading="eager"
                    style={{
                      width: "13vw",
                      height: "13vw",
                      padding: "0",
                      margin: "0",
                      borderRadius: "2vh",
                      border: "1vh solid lightyellow",
                      background:
                        "linear-gradient(#f1ede6 10%,rgba(220, 208, 181)100%)",
                      top: "0",
                      hover: {
                        boxShadow: "0px 0px 100px 100px red",
                      },
                    }}
                    auto-rotate
                    camera-controls
                    ar
                    exposure="1"
                    shadow-softness="1"
                    environment-image="/public/pillars_1k.hdr"
                    ar-modes="webxr"
                    ref={(ref) => {
                      modelRef.current = ref;
                    }}
                  ></model-viewer>
                </div>
              </div>
            </label>
          </HtmlTooltip>

        </div>
      </div>
    </div>
  );
};

export default ChapterVPage;
