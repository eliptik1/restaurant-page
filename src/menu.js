function createMenu(){

    const main = document.createElement("main")
    main.classList.add("menu")
    main.classList.add("white-bg")

    const mainHeader = document.createElement("h1")
    const mainHeader2 = document.createElement("h1")
    const hr = document.createElement("hr")
    const menuItem = document.createElement("div")

    mainHeader.classList.add("main-header")
    mainHeader2.classList.add("main-header-2")
    menuItem.classList.add("menu-container")

    mainHeader.textContent = "Turkish Food"
    mainHeader2.textContent = "MENU"

    main.append(mainHeader)
    main.append(mainHeader2)
    main.append(hr)
    main.append(menuItem)

    const myMenu = [
        {name: "Iskender", price: "120₺", description: "Doner kebab prepared from thinly cut grilled lamb, with tomato sauce over pieces of pita bread, with melted butter and yogurt."},
        {name: "Lahmacun", price: "30₺", description: "Round, thin piece of dough topped with minced lamb, minced vegetables, onions,tomatos and parsley."},
        {name: "Kebab", price: "150₺", description: "Lamb sish, chicken sish and adana kebab, served with salad, yogurt, rice and bread."},
        {name: "Kusbasili Pide", price: "80₺", description: "Thin piece of dough topped with minced lamb, vegetables and herbs including onions."},
        {name: "Baklava", price: "40₺", description: "Sweet dessert pastry made of layers of filo filled with chopped nuts and sweetened and held together with syrup."},
    ]

    for (let i = 0; i < myMenu.length; i++) {
        menuItem.innerHTML += `
        <div class="menu-item">
        <div class="item-header"> <p>${myMenu[i].name}</p> <div class="item-seperator"></div> <p>${myMenu[i].price}</p></div>
        <p class="item-description">${myMenu[i].description}</p>
        </div>
        `
        if(i===myMenu.length-1){menuItem.innerHTML += "<hr>"}
    }
    return main
}

const menu = createMenu()

export { menu }