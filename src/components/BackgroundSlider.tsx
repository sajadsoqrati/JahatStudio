import Slider from "react-slick";
import "../slider.css";
import useMediaQuery from "../assets/hooks/useMediaQuery";
interface BackgroundSliderProps {
  children?: React.ReactNode;
  className: string;
  divClassName?: string;
}

const images = [
  "http://localhost:5000/images/bgpics/p100.jpg",
  "http://localhost:5000/images/bgpics/P200.jpg",
  "http://localhost:5000/images/bgpics/P300.jpg",
  "http://localhost:5000/images/bgpics/P400.jpg",
  "http://localhost:5000/images/bgpics/P500.jpg",
];
export const BackgroundSlider: React.FC<BackgroundSliderProps> = ({
  children,
  className,
  divClassName,
}) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const settings = {
    dots: isSmallScreen ? false : true,
    autoplay: true,
    infinite: true,
    speed: 1200,
    autoplaySpeed: 2300,
    arrows: false,
    fade: true,
    pauseOnHover: false,
  };
  return (
    <div className={divClassName}>
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i}>
            <div
              className={className}
              style={{ backgroundImage: `url(${img})` }}
            >
              {children}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
