import {
  LitElement,
  html,
  customElement,
  property,
  TemplateResult,
} from "lit-element"

@customElement("contact-component")
export class ContactComponent extends LitElement {
  @property({ type: TemplateResult }) intro = html`
    Questions can be directed to
  `
  @property({ type: String }) discord = "https://discord.com"
  @property({ type: String }) github = "https://github.com/OpenNTCIP"
  @property({ type: String }) email = "mailto:info@openntcip.com"

  readonly contactList = [
    { name: "e-mail", url: this.email },
    { name: "discord", url: this.discord },
    { name: "github", url: this.github },
  ]

  readonly contacts = html`
    <div class="title">Contacts</div>
    <div>
      <ul>
        ${this.contactList.map(
          (i) => html`<li><a href=${i.url}>${i.name}</a></li>`
        )}
      </ul>
    </div>
  `

  constructor() {
    super()
  }

  render() {
    return html`
      <div class="columns">
        <div class="column">${this.intro}</div>
      </div>
      <div class="columns">
        <div class="column">${this.contacts}</div>
      </div>
    `
  }

  createRenderRoot() {
    return this
  }
}
