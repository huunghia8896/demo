const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
 res.send('Working... ')
})

app.listen(process.env.PORT || 3000)