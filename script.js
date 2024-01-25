const body = document.querySelector("body"),
    hourhand = document.querySelector(".hour"),
    minutehand = document.querySelector(".minute"),
    secondhand = document.querySelector(".second"),
    modeswitch = document.querySelector(".mode-switch");
    
   if(localStorage.getItem("mode")==="Dark Mode"){
    body.classList.add("dark");
    modeswitch.textContent = "Light Mode";
   }
modeswitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isdarkmode = body.classList.contains("dark");
    modeswitch.textContent = isdarkmode ? "Light Mode" : "Dark Mode";
    localStorage.setItem("mode",isdarkmode?"Dark Mode":"Light Mode")
})
const updatetime = () => {
    let date = new Date(),
        sectodeg = (date.getSeconds() / 60) * 360,
        mintodeg = (date.getMinutes() / 60) * 360,
        hrtodeg = (date.getHours() / 12) * 360;
    secondhand.style.transform = `rotate(${sectodeg}deg)`;
    minutehand.style.transform = `rotate(${mintodeg}deg)`;
    hourhand.style.transform = `rotate(${hrtodeg}deg)`;
}
setInterval(updatetime, 1000);
updatetime();