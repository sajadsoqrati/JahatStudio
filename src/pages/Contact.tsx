import Form from "../components/Form";
export function Contact() {
  return (
    <>
      <div
        id="contect"
        className="fixed top-0 gap-40 w-screen h-screen bg-black text-white flex text-center items-center justify-center"
      >
        <section id="form">
          <h1 className="relative z-0 text-3xl font-bold mt-10 mb-4">
            Get In Touch!
          </h1>
          <Form />
        </section>
        <section id="location">
          <a href="https://maps.app.goo.gl/4gRJqcTGBDdFUKKG8" target="_blank">
            <img
              className="mb-10"
              src="http://localhost:5000/images/map.svg"
              alt="map"
            />
          </a>

          <h1 className="text-3xl font-bold mb-4">Drop by or Give Us a Call</h1>
          <h3 className="font-light mt-4 text-xl text-[#868686]">
            Jahat Creative Communication{" "}
          </h3>
          <address className="font-extralight mt1 text-[#868686]">
            Iran, Guilan, Rasht, Shahid Beheshti ‌‌Broadway, Rudbari Street
          </address>
          <p className="font-extralight text-[#868686]">
            Phone: 013-33524557 • 0993-0099-475
          </p>
        </section>
      </div>
    </>
  );
}
