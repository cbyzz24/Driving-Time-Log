// alert("Test Script for Driving Log");

const scriptURL = 'https://script.google.com/macros/s/AKfycbxkiioK3g6w0dS5UC7apZWb7q2iAmM1tjixWLs3Mr857SmIqFna1wpzA2GWZY7mLr0I/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Your Time Has Been Submitted!"
        setTimeout(function(){
            msg.innerHTML = ""
        },3000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})