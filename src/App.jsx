import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import ContextProvider from "./components/ContextProvider";
import Product from "./pages/Product";
import PlatesPage from "./pages/PlatesPage";
import MugsPage from "./pages/MugsPage";
import VasesPage from "./pages/VasesPage";
import ImageLicense from "./pages/ImageLicense";
import PageNotFound from "./pages/PageNotFound";

//1) CREATE A CONTEXT

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product/:id" element={<Product />} />{" "}
          <Route path="plates" element={<PlatesPage />} />
          <Route path="mugs" element={<MugsPage />} />
          <Route path="vases" element={<VasesPage />} />
          <Route path="image-license-info" element={<ImageLicense />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
