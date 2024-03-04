function Clock(){
    const now = new Date()
    hour = now.getHours().toString().padStart(2,0)
    min = now.getMinutes().toString().padStart(2,0)
    sec = now.getSeconds().toString().padStart(2,0)
    showClock = `${hour}:${min}:${sec}`
    document.getElementById("clock").textContent = showClock
}

Clock()
setInterval(Clock, 1000)