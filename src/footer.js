function createFooter(){
    const footer = document.createElement("footer")
    const head = document.querySelector("head")
    head.innerHTML += `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">`
    footer.innerHTML = `Copyright &copy 2023 eliptik1 &nbsp
    <a href="https://github.com/eliptik1">
        <i class="fa fa-github" style="font-size:26px; color: rgb(255, 202, 104)"></i>
    </a>`

    return footer
}

const footer = createFooter()

export { footer }