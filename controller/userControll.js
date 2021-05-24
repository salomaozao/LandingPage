import { data } from "../testing/db.json"

//PLANO: Usar localStorage para registrar preferências
//TODO: how to define good names?
console.log("aa")

document.getElementById("user_name").innerText = localStorage.getItem("user")

const createUser = () => {
	localStorage.setItem("user#", "000")
}

const getUser = (id) => {
	console.log(data["000"].city)
}
