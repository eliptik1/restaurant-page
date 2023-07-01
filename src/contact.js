function createContact(){

    const main = document.createElement("main")

    const paragraph = document.createElement("p")
    paragraph.classList.add("main-content")
    paragraph.textContent = "Contact Us"

    main.append(paragraph)

    return main
}

const contact = createContact()

export { contact }