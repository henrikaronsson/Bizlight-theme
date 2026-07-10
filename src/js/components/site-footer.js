/**
 * Site-wide footer. Renders a default notice unless the element
 * already has its own content, which then wins:
 *
 *   <site-footer></site-footer>
 *   <site-footer><footer>…custom…</footer></site-footer>
 */
class SiteFooter extends HTMLElement {
  connectedCallback() {
    if (this.firstElementChild) return;

    this.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <p class="mb-0">Copyright &copy; 2026. All rights reserved. Some wrongs may also be reserved.</p>
        </div>
      </footer>`;
  }
}

customElements.define("site-footer", SiteFooter);
