import { Navbar } from "../components/Navbar";
import SocialNav from "../components/SocialNav";
import { desktopNavLinks, desktopUrl } from "./Home";
export function About() {
  return (
    <>
      <div className="bg-black text-white flex flex-col text-center justify-center">
        <Navbar
          navLinks={desktopNavLinks}
          url={desktopUrl}
          className="text-white font-normal flex gap-10 whitespace-nowrap justify-center  mb-10 mt-6 mr-2"
        />

        <div className="grid grid-cols-[65px_1fr] w-screen">
          <div className="flex flex-col justify-center mb-20">
            <SocialNav className="font-large gap-4 flex flex-col justify-center ml-[2.5rem]" />
          </div>
          <div className="mr-16 mt-4">
            <div className="mb-20 mt-10">
              <h2 className="mb-5">ABOUT US</h2>
              <p className=" font-extralight text-[#868686]">
                JAHAT is a creative communications studio that specializes in
                advertising, design, digital, media, and social.
                <br /> We believe in todays creative content is the best way for
                our clients to achieve sustainable growth.
                <br />
                br We get, create and scale ideas that are dynamic, have a
                branded point of view.
              </p>
            </div>
            <div className="mb-20">
              <h2 className="mb-5">OUR MISSION</h2>
              <p className=" font-extralight text-[#868686]">
                A new way of looking at a brand, category, technology, customer
                experience or even how we run our business.
                <br /> Jahat reaches for optimizing the effectiveness of
                marketing for its customers.
              </p>
            </div>
            <div className="mb-32.5">
              <h2 className="pb-4">OUR PURPOSE</h2>
              <p className=" font-extralight text-[#868686]">
                Our main goal is to help design and produce creative content to
                build a better world around us in terms of aesthetics. <br />
                We help clients imagine the best they can be, write their
                stories and deliver those stories to <br />
                the right audiences. Were a successful media company with its
                roots in storytelling <br /> and building audiences. We bring
                that expertise to our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
