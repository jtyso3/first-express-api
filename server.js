let express = require('express')        //  require express lib
let routes = require('./routes/routes')     //  requires path
let path = require('path')


let app = express()

app.use(express.static(path.join( __dirname,'hello-vue', 'dist' )))

app.use('/api', routes)     //      .use() handles any http req

let server= app.listen(process.env.PORT || 3000, ()=>{      //  listens on port 3000 or port of process.env.PORT
    console.log('Express server running on port', server.address().port)
})

