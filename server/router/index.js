module.exports = function(app){
    app.get('/test', (req, res)=> res.send(`This is test page`))
    app.get('/aabb', (req, res) => res.send(`This is aabb`))
}