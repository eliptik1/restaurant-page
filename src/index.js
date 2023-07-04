import './style.scss'
import { createPage } from "./create-page"
import { home } from "./home"
import { menu } from "./menu"
import { contact } from "./contact"

createPage(home)

const mainContainer = document.querySelector("#content")

const homeBtn = document.querySelector(".home")
const menuBtn = document.querySelector(".menu")
const contactBtn = document.querySelector(".contact")
const mainBtn = document.querySelector("button")

function renderPage(tabName, element) {
    const mainContent = document.querySelector("main")
    if(mainContent.classList.contains(tabName)) return
    mainContainer.textContent = ""
    createPage(element)
}

homeBtn.addEventListener("click", () => renderPage("home", home))
menuBtn.addEventListener("click", () => renderPage("menu", menu))
contactBtn.addEventListener("click", () => renderPage("contact", contact))
mainBtn.addEventListener("click", () => renderPage("contact", menu))