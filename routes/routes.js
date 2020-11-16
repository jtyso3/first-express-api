let express = require("express")
let router = express.Router()

router.get('/', (req, res, next)=>{
    res.json({'message': 'hello world! I am aliiiiive!'})
})

module.exports = router