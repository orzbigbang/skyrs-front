const express = require('express')
const app = express()

const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
app.use(require('cors')())

// app.get('/', () => {})

const port = 3007
app.listen(port, () => {
    console.log(`server runing at 127.0.0.1:${port}`)
})