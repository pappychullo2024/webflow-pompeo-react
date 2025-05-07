import ProductSectionOne from "../components/ProductSectionOne";
import PageNav from "../components/PageNav";
import HomePageFooter from "../components/HomePageFooter";
import Webflow from "../components/Webflow";
import ProductSectionTwo from "../components/ProductSectionTwo";
import RelatedItems from "../components/RelatedItems";

function Product() {
  return (
    <>
      <PageNav />
      <ProductSectionOne />

      <ProductSectionTwo />
      <RelatedItems />
      <HomePageFooter />
      <Webflow />
    </>
  );
}

export default Product;
