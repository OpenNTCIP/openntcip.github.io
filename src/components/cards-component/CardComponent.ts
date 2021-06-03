import { LitElement, html, customElement, property } from "lit-element"

@customElement("card-component")
export class CardComponent extends LitElement {
  @property({ type: String }) title = ""
  @property({ type: String }) image = ""
  @property({ type: String }) url = ""

  render() {
    return html`
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">${this.title}</p>
        </header>
        <div class="card-image">
          <figure class="image is-4by3">
            <img src=${this.image} alt="${this.title}" />
          </figure>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">${this.url}</a>
        </footer>
      </div>
    `
  }

  constructor() {
    super()
  }

  createRenderRoot() {
    return this
  }
}
