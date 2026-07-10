// Minimum time the overlay stays visible. Purely cosmetic — nothing
// is actually loading; the delay just makes the transition readable.
const FAKE_DELAY_MS = 700;

/**
 * Fake full-page loading overlay. The overlay background comes from
 * CSS (styled by tag name), so it covers the page even before this
 * module runs; the spinner appears once the element is defined.
 * Removes itself shortly after the window has loaded. Skips the
 * theatrics entirely for users who prefer reduced motion.
 */
class SiteLoader extends HTMLElement {
  connectedCallback() {
    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      this.remove();
      return;
    }

    this.setAttribute("role", "status");
    this.innerHTML = `
      <div class="spinner-border" aria-hidden="true"></div>
      <span class="visually-hidden">Loading…</span>`;

    const dismiss = () => {
      setTimeout(() => {
        this.classList.add("is-done");
        this.addEventListener("transitionend", () => this.remove(), { once: true });
        // Fallback in case the transition never fires.
        setTimeout(() => this.remove(), 1000);
      }, FAKE_DELAY_MS);
    };

    if (document.readyState === "complete") {
      dismiss();
    } else {
      window.addEventListener("load", dismiss, { once: true });
    }
  }
}

customElements.define("site-loader", SiteLoader);
