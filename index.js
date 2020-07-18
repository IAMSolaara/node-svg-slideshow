const expressModule = require ('express')
const app = expressModule()
const port = 3800

const svgModule = require ('svg')

app.get('/', (request, response) => {
	response.send(svgModule('<rect fill=\'blue\' height=\'50\' width=\'50\'>'))
})

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
})
