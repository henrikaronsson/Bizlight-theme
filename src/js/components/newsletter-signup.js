/**
 * Newsletter call-out band shown at the bottom of every page.
 */
class NewsletterSignup extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="section-c">
        <div class="container">
          <div class="row">
            <div class="col-md-8 offset-md-2">
              <h2>Subscribe To Our Newsletter</h2>
              <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sem rhoncus urna iaculis faucibus.</p>
              <hr>
              <form>
                <label for="newsletter-email" class="visually-hidden">Email address</label>
                <input type="email" id="newsletter-email" name="email" class="form-control form-control-lg mb-4" placeholder="Enter Email" autocomplete="email" required>
                <button type="submit" class="btn btn-primary btn-lg w-100">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>`;
  }
}

customElements.define("newsletter-signup", NewsletterSignup);
