const key = "fdf2ccf2678449e78b9154203200310"
const defaultRegion = "Atibaia"
var region = "Atibaia"

const tempEl = document.getElementById("temperature")

const changeRegion = (newRegion) => {
	fetch(
		`http://api.weatherapi.com/v1/current.json?key=${key}&q=${newRegion}&aqi=no`,
	)
		.then((response) => response.json())
		.then((data) => {
			tempEl.innerText = data.current.temp_c
			tempEl.classList.add("loaded")
			console.log(newRegion)
			document.getElementById("regionNameEl").innerText = newRegion

			localStorage.setItem("region", newRegion)
		})
		.catch(() => {
			alert(
				`${newRegion} não é uma cidade válida. Mostrando a temperatura de ${region}`,
			)
		})
}

const region_i = localStorage.getItem("region")
region ? changeRegion(region_i) : changeRegion("Atibaia") // When this runs here, regionNameEl value gets redefined correctly, but when this is called in the index.js file, the same element gets renamed to null. Furthermore, this is dumb.

document.getElementById("citySubmit").addEventListener("click", () => {
	changeRegion(document.getElementById("cityInput").value)
})
