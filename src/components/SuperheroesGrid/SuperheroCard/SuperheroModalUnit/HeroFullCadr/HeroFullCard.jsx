import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { v4 as uuidv4 } from "uuid";
import defaultImg from "../../../../../additional/Screenshot_8.png";

const Gallery = ({ images }) => {
  return (
    <Carousel>
      {images.length > 0 ? (
        images.map((el) => {
          return (
            <div key={uuidv4()}>
              <img alt="superhero" src={el} />
              {/* <p className="legend">Legend 1</p> */}
            </div>
          );
        })
      ) : (
        <div>
          <img alt="superhero" src={defaultImg} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
      )}
    </Carousel>
  );
};

export default Gallery;
