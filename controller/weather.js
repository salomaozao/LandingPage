const key = "fdf2ccf2678449e78b9154203200310"
const region = "Atibaia"

const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${region}&aqi=no`

const tempEl = document.getElementById("temperature")

fetch(url)
	.then((response) => response.json()) //se a cidade não exista, response code = 400, se existe 200
	.then((data) => {
		// console.log(data.current.temp_c)
		tempEl.innerText = data.current.temp_c
		tempEl.classList.add("loaded")
	})
// .catch(() => {
// 	msg.textContent = "Please search for a valid city 😩"
// })
