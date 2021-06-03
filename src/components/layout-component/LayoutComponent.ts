import { LitElement, html, customElement } from "lit-element"
import "../header-component/HeaderComponent"
import "../welcome-component/WelcomeComponent"
import "../library-component/LibraryComponent"
import "../projects-component/ProjectsComponent"
import "../blog-component/BlogComponent"
import "../contact-component/ContactComponent"
import "../footer-component/FooterComponent"

@customElement("layout-component")
export class LayoutComponent extends LitElement {
  render() {
    return html`
      <section class="hero is-fullheight">
        <div class="hero-head">
          <header-component></header-component>
        </div>
        <div class="hero-body">
          <div class="container is-fluid">
            <div id="content"></div>
          </div>
        </div>
        <div class="hero-foot">
          <footer-component></footer-component>
        </div>
      </section>
    `
  }

  createRenderRoot() {
    return this
  }
}
