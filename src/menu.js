function createMenu(){

    const main = document.createElement("main")

    const paragraph = document.createElement("p")
    paragraph.classList.add("main-content")
    paragraph.textContent = "This is our menu"

    main.append(paragraph)

    return main
}

const menu = createMenu()

export { menu }