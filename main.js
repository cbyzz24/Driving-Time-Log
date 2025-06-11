// alert("Test Script for Driving Log");

const scriptURL = 'https://script.google.com/macros/s/AKfycbxkiioK3g6w0dS5UC7apZWb7q2iAmM1tjixWLs3Mr857SmIqFna1wpzA2GWZY7mLr0I/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
const dateEl = document.getElementById("date")
const dayMinsEl = document.getElementById("dayMins")
const nightMinsEl = document.getElementById("nightMins")

form.addEventListener('submit', e => {
e.preventDefault()
if((dateEl.value != "") && (dayMinsEl.value != "" || nightMinsEl.value != "")){
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Time Submitted!"
        setTimeout(function(){
            msg.innerHTML = ""
        },3000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
} else{
    alert("Please enter Date and Day Minutes or Night Minutes")
    }
})
