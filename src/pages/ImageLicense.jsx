import HomePageFooter from "../components/HomePageFooter";
import HomePageSectionSeven from "../components/HomePageSectionSeven";
import Webflow from "../components/Webflow";
import PageNav from "../components/PageNav";
import LicenseSectionOne from "../components/LicenseSectionOne";
import LicenseSectionTwo from "../components/LicenseSectionTwo";

function ImageLicense() {
  return (
    <section>
      <PageNav />
      <LicenseSectionOne />

      <LicenseSectionTwo />
      <HomePageSectionSeven />
      <HomePageFooter />
      <Webflow />
    </section>
  );
}

export default ImageLicense;
