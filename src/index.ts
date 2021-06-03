import "./styles.scss"
import "./images/favicon.ico"
import "./images/logo.png"
import "./images/logo.svg"
import "@fortawesome/fontawesome-free/js/fontawesome"
import "@fortawesome/fontawesome-free/js/solid"
import "@fortawesome/fontawesome-free/js/regular"
import "@fortawesome/fontawesome-free/js/brands"
import "./components/app-component/AppComponent"
import { Router } from "./router"

window.addEventListener("load", () => {
  console.log("Page loaded")
  let router = new Router()
})
