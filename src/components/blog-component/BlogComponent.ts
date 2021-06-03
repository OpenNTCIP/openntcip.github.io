import {
  LitElement,
  html,
  customElement,
  property,
  TemplateResult,
} from "lit-element"

import blogs from "../../json/blogs.json"

@customElement("blog-component")
export class BlogComponent extends LitElement {
  @property({ type: String }) description = blogs.description
  @property({ type: String }) content = ""
  @property({ type: [] }) entries = blogs.blogs

  readonly intro = html`<div class="content">${this.description}</div>`

  readonly blogList = html`
    <div class="title">Blogs</div>
    <div>
      <ul>
        ${this.entries.map(
          (i) =>
            html` <li class="subtitle"><a  @click=${() => {
              this.content = i.content
            }}>${i.title}</a></br>${i.summary}</br>Published: ${i.date}</li>`
        )}
      </ul>
    </div>
  `

  constructor() {
    super()
    this.content = this.entries[0].content
  }

  render() {
    return html`
      <div class="columns">
        <div class="column">${this.intro}</div>
      </div>
      <div class="columns">
        <div class="column">${this.blogList}</div>
        <div class="column">${this.content}</div>
      </div>
    `
  }

  createRenderRoot() {
    return this
  }
}
