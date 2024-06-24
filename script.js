

const note = document.querySelector("button")


note.addEventListener("click", () => {
    const main = document.querySelector("main")
    const text = document.createElement("div")
    const p = document.createElement("p")
    const icone = document.createElement("ion-icon")
    const textarea = document.createElement("textarea")
    const read = document.createElement("div")
    const ico = document.createElement("div")
    text.classList.add("text")
    icone.setAttribute("name","trash-outline")
    ico.classList.add("icons")
    p.appendChild(icone)
    icone.id =  "close"
    ico.appendChild(p)
    read.appendChild(textarea)
    text.appendChild(ico)
    text.appendChild(read)
    main.appendChild(text)
    
})

document.body.addEventListener("click", (event) => {
    if(event.target.id === "close"){
        let none = event.target.closest(".text")
        none.classList.add("hide")
    }
})