const myCheckBox = document.getElementById("myCheckBox")
const visaCard = document.getElementById("visa")
const masterCard = document.getElementById("master")
const paypal = document.getElementById("paypal")
const subscribe = document.getElementById("subResult")
const payment = document.getElementById("paymentResult")
const Submit = document.getElementById("mySubmit")

Submit.onclick = function(){
    if(myCheckBox.checked){
       subscribe.textContent = `You Are Subscribed.`
    }else{
        subscribe.textContent = `You Are Unsubscribe.`
    }

    if(visaCard.checked){
        payment.textContent = `You are pay with VisaCard`
    }else if(masterCard.checked){
        payment.textContent = `You are pay with MasterCard`
    }else if(masterCard.checked){
        payment.textContent = `You are pay with Paypal`
    }else{
        payment.textContent = `You are pay with Nothing`
    }
}