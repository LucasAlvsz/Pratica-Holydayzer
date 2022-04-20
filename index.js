import express from "express"
import cors from "cors"

const app = express()
app.use(cors())

const holidays = [
	{ date: "1/1/2022", name: "Confraternização mundial" },
	{ date: "1/3/2022", name: "Carnaval" },
	{ date: "4/17/2022", name: "Páscoa" },
	{ date: "4/21/2022", name: "Tiradentes" },
	{ date: "5/1/2022", name: "Dia do trabalho" },
	{ date: "6/16/2022", name: "Corpus Christi" },
	{ date: "9/7/2022", name: "Independência do Brasil" },
	{ date: "10/12/2022", name: "Nossa Senhora Aparecida" },
	{ date: "11/2/2022", name: "Finados" },
	{ date: "11/15/2022", name: "Proclamação da República" },
	{ date: "12/25/2022", name: "Natal" },
]

app.get("/holidays", (req, res) => {
	res.send(holidays)
})

app.get("/is-today-holiday", (req, res) => {
	const today = new Date()
	console.log(today.toLocaleDateString())
	holidays.forEach(holiday => {
		if (holiday.date === today.toLocaleDateString())
			res.send("Sim, hoje é " + today.toLocaleDateString())
		else res.send("Não, hoje não é feriado")
	})
})

app.get("/holidays/:month", (req, res) => {
	const today = new Date()
	const monthId = req.params.month
	let holidaysList = holidays.filter(holiday => {
		if (holiday.date.split("/")[0] === monthId) return true
		return false
	})
	if (holidaysList.length > 0) res.send(holidaysList)
	else res.send("Não há feriados nesse mês")
})

app.listen(3000)
