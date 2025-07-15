import { Navbar } from "./components/Navbar";
import { Outlet } from "react-router-dom";
export function Layout() {
  return (
    <>
      <Navbar className="text-white relative z-10  font-normal flex justify-center gap-10 mt-5" />
      <main>
        <Outlet />
      </main>
    </>
  );
}
