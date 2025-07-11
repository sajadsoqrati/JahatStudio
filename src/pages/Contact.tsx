import Form from "../components/Form";
export function Contact() {
  return (
    <>
      <div
        id="contect"
        className="fixed top-0  w-screen h-screen  bg-black text-white flex  text-center items-center justify-center"
      >
        <section id="form">
          <h1 className="text-3xl font-bold mt-10 mb-4">Get In Touch!</h1>
          <Form />
        </section>
        <section id="location"></section>
      </div>
    </>
  );
}
