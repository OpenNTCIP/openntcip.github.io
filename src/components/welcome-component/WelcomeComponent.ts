import { LitElement, html, customElement, property } from "lit-element"
import "../cards-component/CardsComponent"
@customElement("welcome-component")
export class WelcomeComponent extends LitElement {
  readonly intro = html`
    <div class="is-size-4">
      <p>
        A repository of projects relating to traffic control, the NTCIP
        standard, traffic simulation and traffic controller configuration.
      </p>
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
      <cards-component></cards-component>
    `
  }

  createRenderRoot() {
    return this
  }
}
