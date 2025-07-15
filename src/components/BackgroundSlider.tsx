import Slider from "react-slick";

import "../slider.css";

const images = [
  "http://localhost:5000/images/bgpics/p100.jpg",
  "http://localhost:5000/images/bgpics/P200.jpg",
  "http://localhost:5000/images/bgpics/P300.jpg",
  "http://localhost:5000/images/bgpics/P400.jpg",
  "http://localhost:5000/images/bgpics/P500.jpg",
];
export const BackgroundSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1200,
    autoplaySpeed: 2300,
    arrows: false,
    fade: true,
    pauseOnHover: false,
  };
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen  pointer-events: none">
        <Slider {...settings}>
          {images.map((img, i) => (
            <div key={i}>
              <div
                className="w-screen h-screen bg-center border-black  border-2 border-black bg-no-repeat bg-contain "
                style={{ backgroundImage: `url(${img})` }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
