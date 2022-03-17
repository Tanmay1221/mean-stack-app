const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const cors = require('cors')
app.use(cors({ origin: 'http://localhost:4200' }))
const port = 3000

app.get('/', (req, res) => {
    res.json('Hello World !')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})