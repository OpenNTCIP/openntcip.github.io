import Navigo from "navigo"

interface IComponentLoader {
  component: string
  title: string
  lazyModule?: boolean
}

export class Router {
  router: Navigo

  constructor() {
    this.router = new Navigo("/")

    this.router.notFound(() => {
      this.setContent("welcome-component")
    })

    this.router
      .on({
        "/library": () => {
          console.log("Library route")
          this.setContent("library-component")
        },
        "/projects": () => {
          console.log("Projects route")
          this.setContent("projects-component")
        },
        "/blog": () => {
          console.log("Blog route")
          this.setContent("blog-component")
        },
        "/contact": () => {
          console.log("Contact route")
          this.setContent("contact-component")
        },
      })
      .on(() => {
        console.log("Default route")
        this.setContent("welcome-component")
      })
      .resolve()
  }

  setContent = (component: string) => {
    console.log(
      `Previous route = ${this.router.getCurrentLocation().route.path}`
    )
    console.log(`Setting component ${component}`)
    document.querySelector(
      "#content"
    ).innerHTML = `<${component}></${component}>`
  }
}
