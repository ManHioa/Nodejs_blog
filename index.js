const express = require('express')
const app = express()
const port = 1500

app.get('/', (req, res) => {
    var a = 1
    var b = 2
    var c = a + b
    res.send('Hello Oi doi oi!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})