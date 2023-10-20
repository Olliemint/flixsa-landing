import { useEffect } from 'react'
import { motion, useDragControls } from "framer-motion";
import "../App.css"

const images = [
  "https://cdn.pixabay.com/photo/2023/10/12/14/41/town-8310950_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/09/25/20/11/boat-8275962_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/10/15/18/12/swan-8317602_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/10/10/16/05/grapes-8306833_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/10/12/23/33/bird-8311908_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/09/27/03/00/residential-8278516_1280.jpg",
];

const MoviesSlider = () => {
    const controls = useDragControls();

    useEffect(() => {
      const startDrag = (event:any) => {
        controls.start(event);
      };

      const timeout = setTimeout(() => {
        const fakePointerEvent = new PointerEvent("pointerdown");
        startDrag(fakePointerEvent);
      }, 3000);

      return () => clearTimeout(timeout);
    }, [controls]);

  return (
    <div>
      <motion.div className="carousel max-w-6xl">
        <motion.div className="inner-carousel" drag="x" >
          {images.map((image, index) => (
            <motion.div key={index} className="item">
              <img src={image} alt="" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>

  );
}

export default MoviesSlider