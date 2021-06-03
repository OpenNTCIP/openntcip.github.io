import {
  LitElement,
  html,
  customElement,
  property,
  TemplateResult,
} from "lit-element"

import libraries from "../../json/libraries.json"
@customElement("library-component")
export class LibraryComponent extends LitElement {
  @property({ type: String }) content = ""
  @property({ type: String }) description = libraries.description
  @property({ type: [] }) entries = libraries.libraries

  readonly intro = html`<div class="is-size-4">${this.description}</div>`

  readonly libraryList = html`
      <ul>
        ${this.entries.map(
          (i) =>
            html` <li class="subtitle"><a  @click=${() => {
              this.content = i.description
            }}>${i.title}</a></br>${i.description}</br>Status: ${i.status}</li>`
        )}
      </ul>
    </div>
  `

  constructor() {
    super()
    this.content = this.entries[0].description
  }

  render() {
    return html`
      <div class="columns">
        <div class="column">${this.intro}</div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="title">Libraries</div>
        </div>
      </div>
        <div class="columns">
          <div class="column">${this.libraryList}</div>
          <div class="column">
            <div class="content">${this.content}</div>
          </div>
        </div>
      </div>
    `
  }

  createRenderRoot() {
    return this
  }
}
