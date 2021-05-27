localStorage.getItem("backgroundLink")
	? (document.body.style.backgroundImage =
			localStorage.getItem("backgroundLink"))
	: {}

document.getElementById("changeBg").addEventListener("click", () => {
	const newImageURL = prompt("Link da imagem:")

	if (newImageURL) {
		localStorage.setItem("backgroundLink", newImageURL)
		document.body.style.backgroundImage = `url(${newImageURL})`
	}
})

const UpdateComponentStatus = (localRef, checkbox, component) => {
	state = localStorage.getItem(localRef)
	console.log(state)
	checkbox.checked = state
	component.style.display = state ? "flex" : "none"
}

UpdateComponentStatus(
	"showClock",
	document.getElementById("showClock"),
	document.getElementById("clockParent"),
)
UpdateComponentStatus(
	"showTemp",
	document.getElementById("showTemp"),
	document.getElementById("tempParent"),
)
UpdateComponentStatus(
	"showApps",
	document.getElementById("showApps"),
	document.getElementById("apps-column"),
)
