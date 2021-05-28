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
	state = localStorage.getItem(localRef) == "true" //this is really dumb
	checkbox.checked = state
	component.style.display = state ? "flex" : "none"
	if (localStorage.getItem(localRef) === null) {
		checkbox.checked = true
		component.style.display = "flex"
	}
}

//this is dumb

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

const link = localStorage.getItem("backgroundLink")
link ? (document.body.style.backgroundImage = `url(${link})`) : {}
