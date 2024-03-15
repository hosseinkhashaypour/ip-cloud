const themeButton = document.querySelector(".theme-button");
const borderColor = document.getElementById("form");
const input = document.getElementById('password')

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-body')
    themeButton.classList.toggle('dark-button')
})

const span = document.createElement("span")
span.innerHTML = "کاراکتر پسورد باید حداقل شامل 8 حرف باشد";

input.addEventListener("keyup" , function (e){
    if (this.value.length > 8){
        this.style.border = "2px solid rgb(23, 240, 23)"
        span.remove()
    } else if(this.value.length < 8){
        this.style.border = "2px solid red"
        document.body.appendChild(span)
        span.style.color = "red"
    }
})