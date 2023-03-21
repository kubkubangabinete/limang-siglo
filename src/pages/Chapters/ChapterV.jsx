import React, { useState } from "react";
import Ch5Info from "../../shared/components/Partials/Ch5Info";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Land from "../../shared/components/Partials/Ch5_Land";
import SignBoard from "../../shared/components/Partials/Ch5_SignBoard";
import Shield from "../../shared/components/Partials/Ch5_Shield";
import Benefits from "../../shared/components/Partials/Ch5_Benefits";
import PiggyBank from "../../shared/components/Partials/Ch5_PiggyBank";
import Gear from "../../shared/components/Partials/Ch5_Gear";
import Factory from "../../shared/components/Partials/Ch5_Factory";



const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#efcc42",
    color: "white",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    boxShadow: "0px 0px 10px 3px #d8a408",
    border: "none",
  },
}));

const ChapterVPage = () => {
  const [checked, setChecked] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const modelRef = React.useRef();

  return (
    <div className="chapter-container">
        {" "}
        {/* LABEL + ONCLICK */}
        <div className="chapter-five-cards-list">
          <div className="chapter-five-container">
            <h1 className="page-header-title">
              chapter5
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
            <Ch5Info open={isOpen} onClose={() => setIsOpen(false)} />
          </div>

          {/* Solution 1: Free Land Distribution */}
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">Free land distribution</Typography>
              </React.Fragment>
            }
          >
            <div className="dev-1 sol-btn">
              <label>
                <div className="dev-card-btn">
                  <div className="sol-card-image">
                    <Canvas
                      className="model-viewer"
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
                    >
                      <Suspense fallback={null}>
                        <Land rotation={[30,0,0]}/>
                        <Environment preset="sunset" />
                      </Suspense>
                      <OrbitControls />
                    </Canvas>
                  </div>
                </div>
              </label>
            </div>
          </HtmlTooltip>

          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">No exemptions</Typography>
                {/* {"It's very engaging. Right?"} */}
              </React.Fragment>
            }
          >
            <label className="dev-2 sol-btn">
              <div className="dev-card-btn">
                <div className="sol-card-image">
                  <Canvas
                      className="model-viewer"
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
                    >
                      <Suspense fallback={null}>
                        <SignBoard />
                        <Environment preset="sunset" />
                      </Suspense>
                      <OrbitControls />
                    </Canvas>
                </div>
              </div>
            </label>
          </HtmlTooltip>

          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">Land protection</Typography>
                {/* {"It's very engaging. Right?"} */}
              </React.Fragment>
            }
          >
            <label className="dev-3 sol-btn">
              <div className="dev-card-btn">
                <div className="sol-card-image">
                <Canvas
                      className="model-viewer"
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
                    >
                      <Suspense fallback={null}>
                        <Shield />
                        <Environment preset="sunset" />
                      </Suspense>
                      <OrbitControls />
                    </Canvas>
                </div>
              </div>
            </label>
          </HtmlTooltip>

          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">Additional support</Typography>
                {/* {"It's very engaging. Right?"} */}
              </React.Fragment>
            }
          >
            <label className="dev-4 sol-btn">
              <div className="dev-card-btn">
                <div className="sol-card-image">
                <Canvas
                      className="model-viewer"
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
                    >
                      <Suspense fallback={null}>
                        <Benefits />
                        <Environment preset="sunset" />
                      </Suspense>
                      <OrbitControls />
                    </Canvas>
                </div>
              </div>
            </label>
          </HtmlTooltip>

          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">Agriworker support</Typography>
                {/* {"It's very engaging. Right?"} */}
              </React.Fragment>
            }
          >
            <label className="dev-5 sol-btn">
              <div className="dev-card-btn">
                <div className="sol-card-image">
                <Canvas
                      className="model-viewer"
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
                    >
                      <Suspense fallback={null}>
                        <PiggyBank />
                        <Environment preset="sunset" />
                      </Suspense>
                      <OrbitControls />
                    </Canvas>
                </div>
              </div>
            </label>
          </HtmlTooltip>

          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">Farmer participation</Typography>
                {/* {"It's very engaging. Right?"} */}
              </React.Fragment>
            }
          >
            <label className="dev-6 sol-btn">
              <div className="dev-card-btn">
                <div className="sol-card-image">
                <Canvas
                      className="model-viewer"
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
                    >
                      <Suspense fallback={null}>
                        <Gear />
                        <Environment preset="sunset" />
                      </Suspense>
                      <OrbitControls />
                    </Canvas>
                </div>
              </div>
            </label>
          </HtmlTooltip>

          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">
                  National Industrialization
                </Typography>
                {/* {"It's very engaging. Right?"} */}
              </React.Fragment>
            }
          >
            <label className="dev-7 sol-btn">
              <div className="dev-card-btn">
                <div className="sol-card-image">
                <Canvas
                      className="model-viewer"
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
                    >
                      <Suspense fallback={null}>
                        <Factory />
                        <Environment preset="sunset" />
                      </Suspense>
                      <OrbitControls />
                    </Canvas>
                </div>
              </div>
            </label>
          </HtmlTooltip>
        </div>

    </div>
  );
};

export default ChapterVPage;
