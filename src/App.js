import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar, Footer } from "./pages/Shared";
import Routes from "./routes";

function App() {

  useEffect(() => { AOS.init() }, []);

  return (
    <>
      <Navbar />
      <Routes />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
