const express = require("express")
const app = express()
const port = 3000

app.get('/', (req, res) => res.send("Hello World"))

app.use(cors())

require('./router/index')(app)

//404
app.use(function(req, res, next){
    let err = new Error("Not Found")
    err.status = 404
    next(err);
})

//Cope with Error
app.use(function(err, req, res, next){
    res.status(err.status || 500)
    res.send(err.message)
})

app.listen(port, () => {console.log(`Hello World  ${port}`)})