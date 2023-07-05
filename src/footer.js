function createFooter(){
    const footer = document.createElement("footer")

    footer.innerHTML = `Copyright &copy 2023 eliptik1 &nbsp
    <a href="https://github.com/eliptik1">
        <i class="fa fa-github" style="font-size:26px; color: rgb(255, 202, 104)"></i>
    </a>`

    return footer
}

const footer = createFooter()

export { footer }