import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BackgroundSlider } from "../components/BackgroundSlider";
export function Home() {
  return (
    <>
      <div>
        <BackgroundSlider />
        <p className="text-xl">Jahat Creative Communications </p>
        <h1 className="text-5xl font-bold mb-4">A Place To Create</h1>
      </div>
    </>
  );
}
