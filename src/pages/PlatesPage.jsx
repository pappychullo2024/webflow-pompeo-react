import AboutPageSectionOne from "../components/AboutPageSectionOne";
import HomePageFooter from "../components/HomePageFooter";
import HomePageSectionSeven from "../components/HomePageSectionSeven";
import PageNav from "../components/PageNav";
import PlatesSectionTwo from "../components/PlatesSectionTwo";
import Webflow from "../components/Webflow";

function PlatesPage() {
  return (
    <div>
      <PageNav />
      <AboutPageSectionOne />

      <PlatesSectionTwo />
      <HomePageSectionSeven />
      <HomePageFooter />
      <Webflow />
    </div>
  );
}

export default PlatesPage;
