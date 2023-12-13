const express = require('express')
const app = express()

const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
app.use(require('cors')())

const port = 8080
app.listen(port, () => {
    console.log(`server runing`)
})