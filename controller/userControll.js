//Localstoreage will have preferences.
//TODO: this is dumb.
const setDisplay = {
	clock(e) {
		const el = document.getElementById("clockParent")
		localStorage.setItem("showClock", e.target.checked)
		if (e.target.checked) {
			el.style.display = "flex"
		} else {
			el.style.display = "none"
		}
	},

	temp(e) {
		const el = document.getElementById("tempParent")
		localStorage.setItem("showTemp", e.target.checked)

		if (e.target.checked) {
			el.style.display = "flex"
		} else {
			el.style.display = "none"
		}
	},

	apps(e) {
		const el = document.getElementById("apps-column")
		localStorage.setItem("showApps", e.target.checked)

		if (e.target.checked) {
			el.style.display = "flex"
		} else {
			el.style.display = "none"
		}
	},
}

document.getElementById("showClock").addEventListener("click", setDisplay.clock)
document.getElementById("showTemp").addEventListener("click", setDisplay.temp)
document.getElementById("showApps").addEventListener("click", setDisplay.apps)
document.getElementById("clearData").addEventListener("click", () => {
	localStorage.clear()
	location.reload()
})
