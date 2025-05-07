import HomePageFooter from "../components/HomePageFooter";
import HomePageSectionSix from "../components/HomePageSectionSix";
import PageNav from "../components/PageNav";
import ShopPageSectionOne from "../components/ShopPageSectionOne";
import ShopSectionTwo from "../components/ShopSectionTwo";
import Webflow from "../components/Webflow";

function Shop() {
  return (
    <>
      <PageNav />
      <ShopPageSectionOne />

      <ShopSectionTwo />
      <HomePageSectionSix />
      <HomePageFooter />
      <Webflow />
    </>
  );
}

export default Shop;
