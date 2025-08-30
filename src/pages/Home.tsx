import useMediaQuery from "../assets/hooks/useMediaQuery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Contact } from "./Contact";
import { About } from "./About";
import { Navbar } from "../components/Navbar";
import SocialNav from "../components/SocialNav";
import { BackgroundSlider } from "../components/BackgroundSlider";
import { Projects } from "./Projects";
export const desktopNavLinks: string[] = [
  "HOME",
  "PROJECT",
  "CONTACT",
  "OUR TEAM",
  "ABOUT",
  "EDUCATION",
  "FA",
];
export const MobileNaveLinks: string[] = [
  "HOME",
  "ABOUT",
  "CONTACT",
  "PROJECT",
];
export const desktopUrl: string[] = [
  "/",
  "/Projects.tsx",
  "/Contact.tsx",
  "/About.tsx",
  "/About.tsx",
  "/Education.tsx",
  "/Fa.tsx",
];
export const mobileUrl: string[] = [
  "/",
  "/About.tsx",
  "/Contact.tsx",
  "/Projects.tsx",
];
export function Home() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const desktop = (
    <>
      <BackgroundSlider
        divClassName="bg-black"
        className="w-screen h-screen bg-center   border-2 border-black bg-no-repeat bg-contain"
      >
        <Navbar
          navLinks={desktopNavLinks}
          url={desktopUrl}
          className="text-white font-normal flex flex-auto cursor-pointer whitespace-nowrap justify-center gap-10 mt-5 mr-2"
        />

        <div className="grid grid-cols-[65px_1fr]">
          <div className="flex flex-col justify-center mb-54 ">
            <SocialNav className="font-large gap-4 flex flex-col justify-center ml-[2.5rem]" />
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
            <div className=" flex flex-col mt-20 mr-2 items-center ">
              <img
                className="= w-50 mb-4"
                src="/images/logoj.svg"
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

  const mobile = (
    <>
      <div className="bg-black min-h-auto min-width-[350px]">
        <Navbar
          navLinks={MobileNaveLinks}
          url={mobileUrl}
          className="fixed text-white text-xs w-screen h-auto bg-black font-normal flex justify-center cursor-pointer whitespace-nowrap top-0  z-10  gap-4 py-4 border-b-1 mr-2"
        />

        <section id="home">
          <BackgroundSlider className="w-screen h-[15rem] bg-center bg-no-repeat bg-cover mt-15">
            <div className="grid grid-cols-[65px_1fr]">
              <div className="flex justify-start ">
                <SocialNav className=" font-xs gap-2 flex flex-col mt-8 justify-center ml-[1.5rem]" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center mt-10  mr-15">
                  <p className="= flex items-center justify-center text-sm text-white">
                    Jahat Creative Communications
                  </p>
                  <h1 className="flex justify-center w-auto text-xl text-white font-bold">
                    A Place To Create
                  </h1>
                </div>
                <div className="flex flex-col items-center mt-10 mr-15">
                  <img
                    className="mb-3"
                    src="/images/logoj.svg"
                    alt="jahatStudioLogo"
                    width="130"
                    height="37"
                  />
                  <p className="flex justify-center text-[#868686] text-center text-xs font-thin">
                    Jahat Studio| Full Service Advertising & Marketing Agency |
                    since 2019
                  </p>
                </div>
              </div>
            </div>
          </BackgroundSlider>
        </section>
      </div>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="about">
        <About />
        <SocialNav className="flex justify-center gap-8 py-6 bg-black" />
      </section>
    </>
  );
  return <div>{isSmallScreen ? mobile : desktop}</div>;
}
