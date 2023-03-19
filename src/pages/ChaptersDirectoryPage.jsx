import Directory1 from '../shared/components/Partials/Directory1';
import Directory2 from '../shared/components/Partials/Directory2';
import Directory3 from '../shared/components/Partials/Directory3';
import Directory4 from '../shared/components/Partials/Directory4';
import Directory5 from '../shared/components/Partials/Directory5';
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Pagination, Perspective, Fade } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/pagination.css";

import { motion, AnimatePresence } from "framer-motion";


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  }
  
}

const plugins = [new Pagination(), new Fade(), new Perspective({ rotate: -0.5, scale: 0.5, perspective: 600 })];

const ChaptersDirectoryPage = () => {
  

  return (
    <div>
    <motion.div variants={container}
    initial="hidden"
    animate="show"
    className="chd-container">
    <Flicking className="chd-slides" plugins={plugins} bounce={30} circular={true} >
      <motion.div 
        className="chd-slide">
        <Directory1 />
      </motion.div>
      <motion.div className="chd-slide">
        <Directory2 />
      </motion.div>
      <motion.div className="chd-slide">
        <Directory3 />
      </motion.div>
      <motion.div className="chd-slide">
        <Directory4 />
      </motion.div>
      <motion.div className="chd-slide">
        <Directory5 />
      </motion.div>
      <ViewportSlot className="chd-pagination">
        <motion.div className="flicking-pagination">

        </motion.div>
      </ViewportSlot>
    </Flicking>
    </motion.div>
</div>
  )
}

export default ChaptersDirectoryPage