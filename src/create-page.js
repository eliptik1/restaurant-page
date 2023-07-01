import { nav } from "./nav"


function createPage(){
    const mainContainer = document.querySelector("#content")
    mainContainer.appendChild(nav)
    return mainContainer
}

export { createPage }