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

homeBtn.addEventListener("click", () => {
    const mainContent = document.querySelector("main")
    if(mainContent.classList.contains("home")) return
    mainContainer.textContent = ""
    createPage(home)
})

menuBtn.addEventListener("click", () =>  {  
    const mainContent = document.querySelector("main")
    if(mainContent.classList.contains("menu")) return
    mainContainer.textContent = ""
    createPage(menu)
})

contactBtn.addEventListener("click", () =>  {  
    const mainContent = document.querySelector("main")
    if(mainContent.classList.contains("contact")) return
    mainContainer.textContent = ""
    createPage(contact)
})