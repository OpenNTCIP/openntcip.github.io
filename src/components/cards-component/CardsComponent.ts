import {
  LitElement,
  html,
  customElement,
  property,
  TemplateResult,
} from "lit-element"

import "./CardComponent"

import cards from "../../json/cards.json"

@customElement("cards-component")
export class CardsComponent extends LitElement {
  @property({ type: [] }) entries = cards.cards

  render() {
    return html`
      <div class="columns">
        ${this.entries.map(
          (i) =>
            html` ${i.isActive
              ? html`<div class="column">
                  <card-component
                    title=${i.title}
                    image=${i.image}
                  ></card-component>
                </div>`
              : html``}`
        )}
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
