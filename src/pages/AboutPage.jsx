import AboutPageSectionFour from "../components/AboutPageSectionFour";
import AboutPageSectionOne from "../components/AboutPageSectionOne";
import AboutPageSectionThree from "../components/AboutPageSectionThree";
import HomePageFooter from "../components/HomePageFooter";
import HomePageSectionSeven from "../components/HomePageSectionSeven";
import HomePageSectionTwo from "../components/HomePageSectionTwo";
import PageVav from "../components/PageNav";
import Webflow from "../components/Webflow";

function AboutPage() {
  return (
    <>
      <PageVav />
      <AboutPageSectionOne />
      <HomePageSectionTwo />
      <AboutPageSectionThree />
      <AboutPageSectionFour />
      <HomePageSectionSeven />
      <HomePageFooter />

      <Webflow />
    </>
  );
}

export default AboutPage;
