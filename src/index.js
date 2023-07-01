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
    mainContainer.textContent = ""
    createPage(home)
})

menuBtn.addEventListener("click", () =>  {  
    mainContainer.textContent = ""
    createPage(menu)
})

contactBtn.addEventListener("click", () =>  {  
    mainContainer.textContent = ""
    createPage(contact)
})