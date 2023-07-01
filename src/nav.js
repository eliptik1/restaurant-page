function createNav(){
    const navBar = document.createElement("nav")
    navBar.classList.add("navbar")

    const navItems = document.createElement("ul")
    navItems.classList.add("nav-items")

    const homeBtn = document.createElement("li")
    const menuBtn = document.createElement("li")
    const contactBtn = document.createElement("li")

    homeBtn.textContent = "Home"
    menuBtn.textContent = "Menu"
    contactBtn.textContent = "Contact"

    navItems.append(homeBtn, menuBtn, contactBtn)

    navBar.appendChild(navItems) 

    return navBar
}

const nav = createNav()

export { nav }




