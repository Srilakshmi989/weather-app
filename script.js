
let form = document.getElementById("parent-form")
let CityName = document.getElementById("City-Name")
let CityTemp = document.getElementById("City-Temp")
let apikey = "d19484d17165d978b8e51ef5e4180a7b"
form.addEventListener("submit", (event) => {
    event.preventDefault() // to hold the page 
    CityTemp.innerHTML = ""
    //console.log("City Name Is : ",CityName.value)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${CityName.value}&appId=${apikey}&units=metric`
    fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            console.log(res)
            if (res.cod === "404") {
                alert("City Not Found")
            }
            else {
                let { main, name, sys } = res
                let div = document.createElement("div")
                div.classList.add("city")
                const result = `
    <h1>${name}</h1>
    <p>Temp:${main.temp}<sup>0</sup>C</p>
    <p>Country:${sys.country}</p>
    `
                div.innerHTML = result
                CityTemp.appendChild(div)
            }
        })
})