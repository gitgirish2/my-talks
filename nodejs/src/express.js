var express = require('express')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.json())

app.get('/', (req, res, err) => {
    res.send('Hello World!')
})

app.post('/', (req, res, err) => {
    res.send('The data you have sent is: ' + req.body.data)
})

app.listen(3001, () => console.log('Server started at 3001.'))