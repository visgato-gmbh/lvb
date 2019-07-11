'use strict'

const lvb = require('.')
var cors = require('cors')
var express = require('express')
var app = express()
app.use(cors())

app.get('/', function (req, res) {
	var result = {}
	const WilhelmLeuschnerPlatz = '12992'
	const Goerdlerring = '12996'
	const NeuesRathaus = '12994'
	const Markt = '8012186'
	lvb.departures(Goerdlerring, new Date())
		.then((data) => { result.Goerdlerring = data; console.log(data) })
		.then(() => { return lvb.departures(WilhelmLeuschnerPlatz, new Date()).then((data) => { result.WilhelmLeuschnerPlatz = data }) })
		.then(() => { return lvb.departures(NeuesRathaus, new Date()).then((data) => { result.NeuesRathaus = data }) })
		.then(() => { return lvb.departures(Markt, new Date()).then((data) => { result.Markt = data }) })
		.then(() => {
			res.send(result)
		})
})

var server = app.listen(8081, function () {
	var host = server.address().address
	var port = server.address().port
	console.log('Example app listening at http://%s:%s', host, port)
})
