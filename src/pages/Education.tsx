import { BackgroundSlider } from "../components/BackgroundSlider";
import { Navbar } from "../components/Navbar";
import { desktopUrl, desktopNavLinks } from "./Home";

export const Education = () => {
  return (
    <BackgroundSlider
      divClassName="bg-black"
      className="w-screen h-screen bg-center   border-2 border-black bg-no-repeat bg-contain"
    >
      <Navbar
        navLinks={desktopNavLinks}
        url={desktopUrl}
        className="text-white font-normal flex flex-auto cursor-pointer whitespace-nowrap justify-center gap-10 mt-5 mr-2"
      />
    </BackgroundSlider>
  );
};
