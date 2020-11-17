// connects vue to express server.
//Proxy request to local dev server.

module.exports={
    devServer: {
        proxy:'http://127.0.0.1:3000'
    }
}
