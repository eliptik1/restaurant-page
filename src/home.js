function createHome(){

    const main = document.createElement("main")

    const header1 = document.createElement("h1")
    const header2 = document.createElement("h1")
    const paragraph = document.createElement("p")

    header1.classList.add("main-header")
    header2.classList.add("main-header-2")
    paragraph.classList.add("main-content")

    header1.textContent = "Restaurant"
    header2.textContent = "TURKISH FOOD"
    paragraph.textContent = "The world's best cuisine"

    main.append(header1, header2, paragraph)

    return main
}

const home = createHome()

export { home }