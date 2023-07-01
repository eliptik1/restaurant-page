import { nav } from "./nav"
import { footer } from "./footer"
import { home } from "./home"


function createPage(){
    const mainContainer = document.querySelector("#content")
    mainContainer.appendChild(nav)
    mainContainer.appendChild(home)
    mainContainer.appendChild(footer)
    return mainContainer
}

export { createPage }