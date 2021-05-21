const clockEl = document.getElementById("clock")
const [hourEl, minEl, secsEl] = clockEl.children

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const turn = async (el, func) => {
	el.innerHTML = func
}

while (true) {
	var date = new Date()
	let start = date.getMinutes()
	while (start != date.getMinutes()) {
		turn(hourEl, date.getHours())
		turn(minEl, date.getMinutes())
		turn(secsEl, date.getSeconds())
		sleep(1000)
		console.log("a")
	}
}
