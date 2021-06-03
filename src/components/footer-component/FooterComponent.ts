import { LitElement, html, customElement } from "lit-element"

@customElement("footer-component")
export class FooterComponent extends LitElement {
  render() {
    return html`
      <nav class="tabs is-fullwidth">
        <ul>
          <li>
            <a href="/library" data-navigo>
              <span class="icon">
                <i class="fas fa-book-reader"></i>
              </span>
              Libraries
            </a>
          </li>
          <li>
            <a href="/projects" data-navigo>
              <span class="icon">
                <i class="fas fa-project-diagram"></i>
              </span>
              Projects
            </a>
          </li>
          <li>
            <a href="/blog" data-navigo>
              <span class="icon">
                <i class="fas fa-blog"></i>
              </span>
              Blog
            </a>
          </li>
          <li>
            <a href="/contact" data-navigo>
              <span class="icon">
                <i class="fas fa-address-card"></i>
              </span>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    `
  }

  createRenderRoot() {
    return this
  }
}
