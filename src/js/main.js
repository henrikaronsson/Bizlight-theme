import "../styles/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

// The theme only uses collapse behaviour (navbar toggler, accordion),
// so import that single Bootstrap module instead of the full bundle.
// Importing it registers its data-api; no manual wiring needed.
import "bootstrap/js/dist/collapse";

// Shared page chrome as light-DOM web components.
import "./components/site-loader.js";
import "./components/site-header.js";
import "./components/newsletter-signup.js";
import "./components/site-footer.js";
