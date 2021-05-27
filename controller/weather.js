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
			document.getElementById("regionNameEl").innerText = newRegion

			localStorage.setItem("region", newRegion)
		})
		.catch(() => {
			alert(
				`${newRegion} não é uma cidade válida. Mostrando a temperatura de ${region}`,
			)
		})
}

changeRegion(defaultRegion)

document.getElementById("citySubmit").addEventListener("click", () => {
	changeRegion(document.getElementById("cityInput").value)
})
