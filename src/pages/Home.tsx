import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BackgroundSlider } from "../components/BackgroundSlider";
export function Home() {
  return (
    <>
      <div className="flex flex-col ">
        <BackgroundSlider />

        <span className=" relative flex top-38 justify-center flex-col z-0 w-content  ">
          <p className="relative flex items-center justify-center  text-xl text-white mb-3 ">
            Jahat Creative Communications
          </p>
          <h1 className=" relative flex justify-center w-auto text-6xl  text-white font-bold pointer-events-none ">
            A Place To Create
          </h1>
        </span>

        <div className="relative flex flex-col top-90 items-center ">
          <img
            className="relative w-50 mb-4"
            src="src/assets/imges/logoj.svg"
            alt="jahatStudioLogo"
          />
          <p className="relative font-extralight text-[#868686]">
            Jahat Studio| Full Service Advertising & Marketing Agency | since
            2019
          </p>
        </div>
      </div>
    </>
  );
}
