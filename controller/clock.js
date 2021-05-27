const clockEl = document.getElementById("clock")
const [hourEl, minEl] = clockEl.children

const turn = async (el, func) => {
	el.innerHTML = func
}
var date
async function clock() {
	while (true) {
		date = new Date()
		turn(hourEl, date.getHours())
		turn(minEl, date.getMinutes())
		await new Promise((resolve) => setTimeout(resolve, 5000))
	}
}

clock()
