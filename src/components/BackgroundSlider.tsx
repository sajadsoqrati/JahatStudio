import Slider from "react-slick";

import "../slider.css";

const images = [
  "src/assets/imges/p1.svg",
  "src/assets/imges/P2.jpg",
  "src/assets/imges/P3.jpg",
  "src/assets/imges/P4.jpg",
  "src/assets/imges/P5.jpg",
];
export const BackgroundSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 4000,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    pauseOnHover: false,
  };
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <Slider {...settings}>
          {images.map((img, i) => (
            <div key={i}>
              <div
                className="w-screen h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
