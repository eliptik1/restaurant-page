import { nav } from "./nav"
import { footer } from "./footer"
import { home } from "./home"


function createPage(newPage){
    const mainContainer = document.querySelector("#content")
    mainContainer.appendChild(nav)
    mainContainer.appendChild(newPage)
    mainContainer.appendChild(footer)
    return mainContainer
}

export { createPage }