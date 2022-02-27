function toggleDarkMode() {
    var bodyElement = document.getElementById('main-background')
    var darkModeBtn = document.getElementById('dark-mode-btn')

    if (bodyElement.style.background == "black") {
        bodyElement.style.background = "#ADD8E6"
        darkModeBtn.innerHTML = "Change to Dark Mode"
        bodyElement.style.color = "black"

    } else {
        bodyElement.style.background = "black"
        bodyElement.style.color = "white"
        darkModeBtn.innerHTML = "Change to Light Mode"
    }


}