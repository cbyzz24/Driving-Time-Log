// alert("Test Script for Driving Log");

const scriptURL = 'https://script.google.com/macros/s/AKfycbxkiioK3g6w0dS5UC7apZWb7q2iAmM1tjixWLs3Mr857SmIqFna1wpzA2GWZY7mLr0I/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
const dateEl = document.getElementById("date")
const dayMinsEl = document.getElementById("dayMins")
const nightMinsEl = document.getElementById("nightMins")
const webAddr = 'https://docs.google.com/spreadsheets/d/1_ipQPy9GTio6pY_RCXLzWjBz8BDETsjRwu8-E2d6OOM/export?format=csv'
const remainHoursEl = document.getElementById("remainHours")


form.addEventListener('submit', e => {
e.preventDefault()
if((dateEl.value != "") && (dayMinsEl.value != "" || nightMinsEl.value != "")){
    msg.innerHTML = "Updating....."
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Time Submitted!"
        setTimeout(function(){
            msg.innerHTML = ""
        },3000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
    // remainHoursEl.innerHTML = "Updating....."
    fetch(webAddr)
    .then(result=>result.text())
    .then(function(csvtext){
        return csv().fromString(csvtext)
    })
    // .then(function(csv){
    //     remainHoursEl.innerHTML = "<h4>Remaining Hours</h4>"
    //     // remainHoursEl.innerHTML = "<code>" + JSON.stringify(csv) + "</code>"
    //     csv.forEach(function(row){
    //         // remainHoursEl.innerHTML += "<p>" + row.type + "</p>"
    //         remainHoursEl.innerHTML += row.type + ": "
    //         remainHoursEl.innerHTML += row.hours +"<br>"
    //         // remainHoursEl.innerHTML += "<p>" + row.hours + "</p>"
    //     })
    // })
} else{
    alert("Please enter Date and Day Minutes or Night Minutes")
    }
})



form.addEventListener("submit", (e) => {
    fetch(webAddr)
    .then(result=>result.text())
    .then(function(csvtext){
        return csv().fromString(csvtext)
    })
        .then(function(csv){
            remainHoursEl.innerHTML = "<h4>Remaining Hours</h4>"
            // remainHoursEl.innerHTML = "<code>" + JSON.stringify(csv) + "</code>"
            csv.forEach(function(row){
                // remainHoursEl.innerHTML += "<p>" + row.type + "</p>"
                remainHoursEl.innerHTML += row.type + ": "
                remainHoursEl.innerHTML += row.hours +"<br>"
                // remainHoursEl.innerHTML += "<p>" + row.hours + "</p>"
            })
        })
})
