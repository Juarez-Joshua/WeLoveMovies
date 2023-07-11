const {listTheaters} = require("./theaters.service");

async function list (req,res,next){
    const data = await listTheaters()
    res.json({data});
}

module.exports = {
    list,
}