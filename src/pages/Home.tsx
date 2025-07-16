import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navbar } from "../components/Navbar";
import SocialNav from "../components/SocialNav";

import { BackgroundSlider } from "../components/BackgroundSlider";
export function Home() {
  return (
    <>
      <BackgroundSlider className="grid grid-row-span-2">
        <Navbar className="text-white font-normal flex flex-auto  whitespace-nowrap justify-center gap-10 mt-5 mr-2" />

        <div className="grid grid-cols-[65px_1fr]">
          <div className="flex flex-col justify-center mb-54 ">
            <SocialNav />
          </div>
          <div className="flex flex-col justify-center items-center  mr-12.5 mb-30 min-h-screen">
            <div className="mr-2 mt-40 mb-10 ">
              <p className="= flex items-center justify-center  text-xl text-white mb-3 ">
                Jahat Creative Communications
              </p>
              <h1 className=" = flex justify-center w-auto text-6xl  mb-30  text-white font-bold ">
                A Place To Create
              </h1>
            </div>
            <div className="= flex flex-col mt-20 mr-2 items-center ">
              <img
                className="= w-50 mb-4"
                src="http://localhost:5000/images/logoj.svg"
                alt="jahatStudioLogo"
              />
              <p className="= font-extralight text-[#868686]">
                Jahat Studio| Full Service Advertising & Marketing Agency |
                since 2019
              </p>
            </div>
          </div>
        </div>
      </BackgroundSlider>
    </>
  );
}
