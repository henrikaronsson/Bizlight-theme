const PAGES = [
  { href: "index.html", key: "home", label: "Home" },
  { href: "about.html", key: "about", label: "About" },
  { href: "services.html", key: "services", label: "Services" },
  { href: "contact.html", key: "contact", label: "Contact" },
];

const SOCIAL = [
  { href: "https://twitter.com", label: "Twitter", icon: "bi-twitter" },
  { href: "https://facebook.com", label: "Facebook", icon: "bi-facebook" },
  { href: "https://google.com", label: "Google", icon: "bi-google" },
  { href: "https://linkedin.com", label: "LinkedIn", icon: "bi-linkedin" },
];

/**
 * Site-wide header and navigation. Renders into the light DOM so
 * Bootstrap's navbar styles and collapse behaviour apply as usual.
 * The active page is marked via the `current` attribute:
 *
 *   <site-header current="about"></site-header>
 */
class SiteHeader extends HTMLElement {
  connectedCallback() {
    const current = this.getAttribute("current");

    const navItems = PAGES.map(({ href, key, label }) => {
      const active = key === current;
      return `<li class="nav-item"><a class="nav-link${active ? " active" : ""}"${active ? ' aria-current="page"' : ""} href="${href}">${label}</a></li>`;
    }).join("\n              ");

    const socialItems = SOCIAL.map(
      ({ href, label, icon }) =>
        `<li class="nav-item"><a class="nav-link" href="${href}" aria-label="${label}"><i class="bi ${icon}" aria-hidden="true"></i></a></li>`,
    ).join("\n              ");

    this.innerHTML = `
      <header>
        <nav class="navbar navbar-expand-md" data-bs-theme="dark" aria-label="Main">
          <div class="container">
            <a class="navbar-brand" href="index.html">Bizlight Theme</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbar" class="collapse navbar-collapse">
              <ul class="navbar-nav">
                ${navItems}
              </ul>
              <ul class="navbar-nav ms-auto">
                ${socialItems}
              </ul>
            </div>
          </div>
        </nav>
      </header>`;
  }
}

customElements.define("site-header", SiteHeader);
