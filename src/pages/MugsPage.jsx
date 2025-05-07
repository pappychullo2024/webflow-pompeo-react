import AboutPageSectionOne from "../components/AboutPageSectionOne";
import HomePageFooter from "../components/HomePageFooter";
import HomePageSectionSeven from "../components/HomePageSectionSeven";
import MugsSectionTwo from "../components/MugsSectionTwo";
import PageNav from "../components/PageNav";
import Webflow from "../components/Webflow";

function MugsPage() {
  return (
    <div>
      <PageNav />
      <AboutPageSectionOne />

      <MugsSectionTwo />
      <HomePageSectionSeven />
      <HomePageFooter />
      <Webflow />
    </div>
  );
}

export default MugsPage;
