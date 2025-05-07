import styles from "./PageLink.module.css";

import { Link } from "react-router-dom";

function PageLink() {
  return (
    <ul className={styles.ul}>
      <li>
        <Link to="https://webflow.com/templates/html/lunar-creative-website-template">
          Lunar - Creative Website Template
        </Link>
      </li>
      <li>
        <Link to="https://webflow.com/templates/html/atelier-photography-website-template">
          Atelier - Agency Website Template
        </Link>
      </li>
      <li>
        <Link to="https://webflow.com/templates/html/monday-agency-website-template">
          Monday - Agency Website Template
        </Link>
      </li>
      <li>
        <Link to="https://webflow.com/templates/html/layers-photography-website-template">
          Layers - Photography Website Template
        </Link>
      </li>
      <li>
        <Link to="https://webflow.com/templates/html/concrete-construction-website-template">
          Concrete - Construction Website Template
        </Link>
      </li>
      <li>
        <Link to="https://webflow.com/templates/html/chapel-church-website-template">
          Chapel - Church Website Template
        </Link>
      </li>
      <li>
        <Link to="https://webflow.com/templates/html/doctorology-doctor-website-template">
          Doctorology - Doctor Website Template
        </Link>
      </li>
      <li>
        <Link to="https://webflow.com/templates/html/techsource-saas-website-template">
          Techsource - Agency Website Template
        </Link>
      </li>
      <li>
        <Link to="https://webflow.com/templates/html/jupiter-newsletter-website-template">
          Jupiter - Newsletter Website Template
        </Link>
      </li>
      <li>
        <Link to="https://webflow.com/templates/html/artdeco-interior-design-website-template">
          Artdeco - Interior design Website Template
        </Link>
      </li>
      <li>
        <Link to="https://webflow.com/templates/html/ava-agency-website-template">
          Ava - Agency Website Template
        </Link>
      </li>
      <li>
        <Link to="https://webflow.com/templates/html/commodus-business-website-template">
          Commodus - Business Website Template
        </Link>
      </li>
      <li>
        <Link to="https://webflow.com/templates/html/pyramid-agency-website-template">
          Pyramid - Agency Website Template
        </Link>
      </li>
      <li>
        <Link to="https://webflow.com/templates/html/markflow-agency-website-template">
          Markflow - Agency Website Template
        </Link>
      </li>
      <li>
        <Link to="https://webflow.com/templates/html/writer-blog-website-template">
          Writer - Blog Website Template
        </Link>
      </li>
      <li>
        <Link to="https://webflow.com/templates/html/newman-portfolio-website-template">
          Newman - Portfolio Website Template
        </Link>
      </li>
      <li>
        <Link to="https://webflow.com/templates/html/summit-conference-website-template">
          Summit - Conference Website Template
        </Link>
      </li>
    </ul>
  );
}

export default PageLink;
