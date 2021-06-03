import {
  LitElement,
  html,
  customElement,
  property,
  TemplateResult,
} from "lit-element"

import projects from "../../json/projects.json"

@customElement("projects-component")
export class ProjectsComponent extends LitElement {
  @property({ type: String }) description = projects.description
  @property({ type: [] }) entries = projects.projects
  @property({ type: String }) content = ""

  readonly projectList = html`
    <div>
      <ul>
        ${this.entries.map(
          (i) =>
            html` <li class="subtitle"><a  @click=${() => {
              this.content = i.description
            }}>${i.title}</a></br>Status: ${i.status}</li>`
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
        <div class="column">${this.description}</div>
      </div>
      <div class="columns">
        <div class="title">Projects</div>
      </div>
      <div class="columns">
        <div class="column">${this.projectList}</div>
        <div class="column">${this.content}</div>
      </div>
    `
  }

  createRenderRoot() {
    return this
  }
}
