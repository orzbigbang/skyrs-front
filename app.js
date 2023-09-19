const express = require('express')
const app = express()

const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
app.use(require('cors')())

const port = 80
const host = "127.0.0.1"
app.listen(port, host, () => {
    console.log(`server runing at 127.0.0.1:${port}`)
})