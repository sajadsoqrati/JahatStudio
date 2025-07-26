import useMediaQuery from "../assets/hooks/useMediaQuery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navbar } from "../components/Navbar";
import SocialNav from "../components/SocialNav";
import { BackgroundSlider } from "../components/BackgroundSlider";
export const desktopNavLinks: string[] = [
  "HOME",
  "ABOUT",
  "OUR TEAM",
  "CONTACT",
  "PROJECT",
  "EDUCATION",
  "FA",
];
export const MobileNaveLinks: string[] = [
  "HOME",
  "ABOUT",
  "OUR TEAM",
  "CONTACT",
  "PROJECT",
];
export const desktopUrl: string[] = [
  "/",
  "/About.tsx",
  "/About.tsx",
  "/Contact.tsx",
  "/Projects.tsx",
  "/Education.tsx",
  "/Fa.tsx",
];
export const mobileUrl: string[] = ["#home", "#projects", "#contact", "#about"];
export function Home() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const desktop = (
    <>
      <BackgroundSlider className="w-screen h-screen bg-center border-black  border-2 border-black bg-no-repeat bg-contain">
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

  const mobile = (
    <div className="bg-black min-h-[650px] min-width-[350px]">
      <Navbar
        navLinks={MobileNaveLinks}
        url={mobileUrl}
        className="fixed top-0 left-10 z-10 text-white text-xs font-normal flex justify-center cursor-pointer whitespace-nowrap  gap-4 mt-6 mr-2"
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
                  src="http://localhost:5000/images/logoj.svg"
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
      <section id="projects">
        <p className="text-white">
          Lorem Ipsum is simply dummy text of the printing and typesettingی
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing It is a long established fact
          that a reader will be distracted by the readable content of a page
          when looking at its layout. The point of using Lorem Ipsum is that it
          has a more-or-less normal distLorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like). Where
          does it come from? Contrary to popular belief, Lorem Ipsum is not
          simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32. The standard chunk of
          Lorem Ipsum used since the 1500s is reproduced below for those
          interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
          Malorum" by Cicero are also reproduced in their exact original form,
          accompanied by English versions from the 1914 translation by H.
          Rackham. Where can I get some? There are many variations of passages
          of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don't look
          even slightly believable. If you are going to use a passage of Lorem
          Ipsum, you need to be sure there isn't anything embarrassing hidden in
          the middle of text. All the Lorem Ipsum generators on the Internet
          tend to repeat predefined chunks as necessary, making this the first
          true generator on the Internet. It uses a dictionary of over 200 Latin
          words, combined with a handful of model sentence structures, to
          generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum
          is therefore always free from repetition, injected humour, or
          non-characteristic words etc. 5 paragraphs words bytes lists Start
          with 'Lorem ipsum dolor sit amet...' ribution of letters, as opposed
          to using 'Content here, content here', making it look like readable
          English. Many desktop publishing packages and web page editors now use
          Lorem Ipsum as their default model text, and a search for 'lorem
          ipsum' will uncover many web sites still in their infancy. Various
          versions have evolved over the years, sometimes by accident, sometimes
          on purpose (injected humour and the like). like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </section>
    </div>
  );
  return <div>{isSmallScreen ? mobile : desktop}</div>;
}
