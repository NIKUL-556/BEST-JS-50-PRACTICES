// Create a button dynamically and add it to the web page

let btn = document.createElement("button")
let para = document.querySelector("p")

btn.textContent = "button"
btn.style.backgroundColor = "red"
btn.style.padding = "10px"

para.after(btn)

