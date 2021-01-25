const { response } = require('express')
let express = require('express')
let path = require('path')
let app = express()



app.use( express.static('./public'));



app.get('/home', function(request, response){
    response.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/ducky', function(request, response){
    response.sendFile(path.join(__dirname, 'Ducky.html'))
})

app.get('/duckoo', function(request, response){
    response.sendFile(path.join(__dirname, 'Duckoo.html'))
})

app.listen(8080)