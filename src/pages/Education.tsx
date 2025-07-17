import { BackgroundSlider } from "../components/BackgroundSlider";
import { Navbar } from "../components/Navbar";

export const Education = () => {
  return (
    <BackgroundSlider className="grid grid-row-span-2">
      <Navbar className="text-white font-normal flex flex-auto cursor-pointer whitespace-nowrap justify-center gap-10 mt-5 mr-2" />
    </BackgroundSlider>
  );
};
