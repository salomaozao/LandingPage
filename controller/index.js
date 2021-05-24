document.getElementById("changeBg").addEventListener("click", () => {
	const newImage = prompt("Link da imagem:")
	// const newImage = "https://wallpapercave.com/wp/wp7911848.jpg"

	document.body.style.backgroundImage = `url(${newImage})`
})
