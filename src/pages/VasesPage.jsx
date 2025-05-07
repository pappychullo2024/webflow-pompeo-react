import AboutPageSectionOne from "../components/AboutPageSectionOne";
import HomePageFooter from "../components/HomePageFooter";
import HomePageSectionSeven from "../components/HomePageSectionSeven";
import PageNav from "../components/PageNav";
import VasesSectionTwo from "../components/VasesSectionTwo";
import Webflow from "../components/Webflow";

function VasesPage() {
  return (
    <div>
      <PageNav />
      <AboutPageSectionOne />

      <VasesSectionTwo />
      <HomePageSectionSeven />
      <HomePageFooter />
      <Webflow />
    </div>
  );
}

export default VasesPage;
