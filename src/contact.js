function createContact(){

    const main = document.createElement("main")
    main.classList.add("contact")

    /* const paragraph = document.createElement("p")
    paragraph.classList.add("main-content")
    paragraph.textContent = "Contact Us"

    main.append(paragraph) */

    main.innerHTML = `
    <h2 class="main-content">Contact Us</h2>
    <hr>
    <p>Contact us to savor authentic Turkish cuisine. Our friendly staff is ready to assist you with any inquiries, 
    reservations, or feedback. Give us a call or visit us in person for a memorable dining experience 
    that captures the essence of Turkey.</p>
    <hr>
    <ul>
        <li>Phone: 012 345 6789</li>
        <li>Email: turkishfood@restaurant.com</li>
        <li>Address: 123 Main Street, Istanbul, Turkey</li>
    </ul>

    `

    return main
}

const contact = createContact()

export { contact }