import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { navigate } from "gatsby";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureGrid from "../components/FeatureGrid";
import Frustrations from "../components/Frustrations";
import Footer from "../components/Footer";

const RedirectPage = () => {
  React.useEffect(() => {
    // Set a timer to navigate after 5 seconds
    const timer = setTimeout(() => {
      navigate("https://beta.odinclassroom.com/"); // Navigate to the desired path
    }, 3000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-white">
      <div className="text-3xl">Redirecting you in 5 seconds...</div>
      {/* Add a clickable link below */}

      <a
        className="font-normal px-4 py-3 bg-white rounded-lg text-[#134E3A] hover:bg-transparent hover:text-white border border-transparent hover:border-solid hover:border-white  mt-4 transition-all duration-400 ease text-md"
        href="https://beta.odinclassroom.com/"
      >
        Click here to redirect immediately
      </a>
    </div>
  );
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="bg-gradient-radial">
      {/* <Navbar />
      <Hero />

      <FeatureGrid />
      <h1 className="text-white text-center lg:text-5xl text-2xl mt-32"> We have heard your issues with current solutions</h1>
      <Frustrations />
      <Footer /> */}
      <RedirectPage />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
