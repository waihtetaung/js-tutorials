const increaseBtn = document.getElementById('increaseBtn')
const resetBtn = document.getElementById('resetBtn')
const decreaseBtn = document.getElementById('decreaseBtn')
const countBtn = document.getElementById('count')

let count = 0

increaseBtn.onclick = function(){
    count++
    countBtn.textContent = count
}

decreaseBtn.onclick = function(){
    count--
    countBtn.textContent = count
}

resetBtn.onclick = function(){
    count = 0
    countBtn.textContent = count
}