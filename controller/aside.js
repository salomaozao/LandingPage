var isActive = false

document.getElementById("aside-open").addEventListener("click", (e) => {
	document.getElementById("aside").classList.remove("off")
	document.getElementById("aside-open").classList.add("off")
	isActive = true
})

document.getElementById("aside-close").addEventListener("click", (e) => {
	document.getElementById("aside").classList.add("off")
	document.getElementById("aside-open").classList.remove("off")
	isActive = false
})
