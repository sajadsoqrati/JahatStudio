import useMediaQuery from "../assets/hooks/useMediaQuery";
import Form from "../components/Form";
import { Navbar } from "../components/Navbar";
import SocialNav from "../components/SocialNav";
import {
  desktopUrl,
  desktopNavLinks,
  MobileNaveLinks,
  mobileUrl,
} from "./Home";
export function Contact() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <div className="bg-black w-screen h-screen max-md:h-fit text-white ">
      {isSmallScreen ? (
        <Navbar
          navLinks={MobileNaveLinks}
          url={mobileUrl}
          className="fixed text-white text-xs w-screen h-auto bg-black font-normal flex justify-center cursor-pointer whitespace-nowrap top-0  z-10  gap-4 py-4 border-b-1 mr-2"
        />
      ) : (
        <Navbar
          navLinks={desktopNavLinks}
          url={desktopUrl}
          className="text-white font-normal flex whitespace-nowrap justify-center gap-10 pt-6 mr-2"
        />
      )}
      <div
        className={
          isSmallScreen ? "flex flex-col" : "grid grid-cols-[65px_1fr_1fr]"
        }
      >
        {isSmallScreen ? (
          ""
        ) : (
          <div className="flex flex-col justify-center items-start">
            <SocialNav className="font-large gap-4 flex flex-col justify-center ml-[2.5rem]" />
          </div>
        )}
        <div>
          <section
            id="form"
            className={
              isSmallScreen
                ? "flex flex-col items-center"
                : "flex flex-col items-center ml-20"
            }
          >
            <h1 className="text-3xl font-bold mt-10 mb-4">Get In Touch!</h1>
            <Form />
          </section>
        </div>
        <div>
          <section
            id="location"
            className={
              isSmallScreen
                ? "bg-black flex flex-col items-center pt-20 pb-10"
                : "flex flex-col items-center mt-30 mr-30"
            }
          >
            <a href="https://maps.app.goo.gl/4gRJqcTGBDdFUKKG8" target="_blank">
              <img className="mb-10" src="/images/map.svg" alt="map" />
            </a>

            <h1 className="text-3xl font-bold mb-4">
              Drop by or Give Us a Call
            </h1>
            <h3 className="font-light mt-4 text-xl text-[#868686]">
              Jahat Creative Communication
            </h3>
            <address className="font-extralight mt-1 px-2 text-center text-[#868686]">
              Iran, Guilan, Rasht, Golsar, 104 street
            </address>
            <p className="font-extralight text-[#868686] ">
              Phone: 013-33524557 • 0993-0099-475
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
