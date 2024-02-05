const zrozumianoList = document.querySelectorAll(".zrozumiano")

for (let zrozumianoButton of zrozumianoList) {
    zrozumianoButton.onclick = () => {
        if (zrozumianoButton.style.backgroundColor === "rgb(0, 255, 0)") {
            zrozumianoButton.style.backgroundColor = "#fff"
        } else {
            zrozumianoButton.style.backgroundColor = "#0f0"
        }
    }
}